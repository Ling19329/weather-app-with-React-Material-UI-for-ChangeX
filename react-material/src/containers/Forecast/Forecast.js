import React, { useState, useEffect } from 'react';
import {styled} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from '../../components/chart'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import IntegrationSelect from './integrationSelect'

import RefreshIcon from '@material-ui/icons/Refresh';


const Temperature = styled(Typography)`
  
`;

// const Daily = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;

//   display: flex;
//   flex-direction: column;
//   width: 125px;
//   margin-left: 70px;

//   @media (max-width: 700px) {
//     margin: 20px 0;
//   }

//   li {
//     display: flex;
//     justify-content: space-between;
//   }

//   p {
//     margin: 5px 0;
//     font-size: 18px;
//   }
// `;

// const Weekly = styled.ul`
//   margin: 0;
//   padding: 0 20px;
//   list-style: none;

//   display: flex;
//   justify-content: space-between;
//   width: 100%;

//   @media (max-width: 700px) {
//     flex-wrap: wrap;
//     justify-content: space-around;
//     padding: 0;
//   }

//   li {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   h3 {
//     margin: 0;
//     margin-bottom: 15px;

//     @media (max-width: 700px) {
//       font-size: 15px;
//     }
//   }

//   i {
//     font-size: 40px;
//     margin-bottom: 15px;

//     @media (max-width: 700px) {
//       font-size: 30px;
//       margin-bottom: 0;
//     }
//   }
// `;


const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,   
      background: "linear-gradient(0deg, #dbedf9 0%, #defceb 100%)",
      paddingTop:'100px',
      color:'white'
    },
    wrapper:{
      width:'800px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignzitems: 'center',
      height: '100%',
    },


    weatherType:{
      margin: 0,
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },

    weather:{
      backgroundImage: `url(${"assets/images/wave.png"})`,
      backgroundSize: '280px 250px',
      padding:'20px',
      height : '200px',
      display: 'flex',
      flexWrap:'wrap',
      alignContent: 'space-between',
      flexDirection : 'rows',
      alignItems: 'flex-start',
      background: "linear-gradient(45deg, #337777 30%, #5a8fa1 70%)",

      '& i': {
        fontSize: '50px',
        marginTop: '10px',
        marginRight:'0px'
      }
    },

    weatherFeature:{
      marginTop:'20px',
      padding:'8px',
      height : '160px',
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'space-between',
      flexDirection : 'columns',
      alignItems: 'flex-start',
      background: "linear-gradient(60deg, rgb(34, 119, 85, 0.8) 30%, rgb(85, 161, 143,0.8) 70%)",

      '& i': {
        fontSize: '50px',
        marginTop: '10px',
        marginRight:'0px'
      }
    },
    menu:{
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    city:{
      fontSize:'60px',
      color:'white',
      margin: 0,
      textTransform: 'capitalize',
    },
    toggleStyles:{
      width: 'auto',
      marginLeft: 'auto'
    },
    dateRow:{
      width: '100%',
      marginLeft: '30px',
      
    },

    currentDate:{
      margin: 0,
      fontSize:'30px',
    },
    
    forecast:{
      
      backgroundSize: '600px 500px',
      marginLeft:'20px',
      height : '435px',
      display: 'flex',
      flexWrap:'wrap',
      alignContent: 'space-between',
      flexDirection : 'rows',
      alignItems: 'flex-start',

      animation:`$cf3FadeInOut 3s`,

      '& i': {
        fontSize: '50px',
        marginTop: '10px',
        marginRight:'0px'
      }
    },

    weekList : {
      transform: 'translateZ(0)',
      flexWrap: 'nowrap',
      height:'182px'
    },

    everyDay:{
      backgroundColor:'rgb(51,102,54,0.4)',
      padding:'0 24.2px 0 24.2px!important',
      transition: 'height 0.3s',
      height:'175px!important',
      alignSelf:'flex-end',
      '& i': {
        fontSize: '20px',
        marginTop: '10px',
        marginRight:'0px'
      },

      '&:hover':{
        background: "linear-gradient(0deg, rgb(66, 102, 67, 0.8) 30%, rgb(124, 189, 135, 0.8) 70%)",
        height:'194px!important',
        //marginTop:'-2px',
      }
    },

    temperature:{
      fontSize: '50px',
      marginRight: '10px',
    },

    '@keyframes cf3FadeInOut': {
      '0%':{
       opacity:0.5

      },

      '100%':{
        opacity:1
      }
    },

    dot : {
      willChange: 'transform',
      //-webkit-animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
      animation: `$xAxis 1s infinite cubic-bezier(0.02, 0.01, 0.21, 1)`,
      //position: 'absolute',
      bottom: '-10px',
      left: '-10px',
      marginLeft:'-25px',
      marginTop:'100px',
      
      '&:after':{
        content: '""',
        display: 'block',
        willChange: 'transform',
        width: '5px',
        height: '4px',
        borderRadius: '20px',
        backgroundColor:'black',
        //-webkit-animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64),
        animation: `$yAxis 1s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)`,
        }
    },


    '@keyframes yAxis' : {
      '50%' : {
        //-webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
        animationTimingFunction: 'cubic-bezier(0.02, 0.01, 0.21, 1)',
        //-webkit-transform: translateY(-100px);
        transform: 'translateY(-60px)',
      },
      '100%' : {
        //-webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
        animationTimingFunction: 'cubic-bezier(0.02, 0.01, 0.21, 1)',
        //-webkit-transform: translateY(-100px);
        transform: 'translateY(-50px)',
      }
    },
  
    // @-webkit-keyframes yAxis {
    //   50% {
    //     -webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    //     animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    //     -webkit-transform: translateY(-100px);
    //     transform: translateY(-100px);
    //   }
    // }
  
    '@keyframes xAxis' : {
      '50%' : {
        //-webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
        animationTimingFunction: 'cubic-bezier(0.3, 0.27, 0.07, 1.64)',
        //-webkit-transform: translateX(100px);
        transform: 'translateX(135px)',
      },
      '100%' : {
        //-webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
        animationTimingFunction: 'cubic-bezier(0.3, 0.27, 0.07, 1.64)',
        //-webkit-transform: translateX(100px);
        transform: 'translateX(270px)',
      }
    }
  
    // @-webkit-keyframes xAxis {
    //   50% {
    //     -webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    //     animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    //     -webkit-transform: translateX(100px);
    //     transform: translateX(100px);
    //   }
    // } 
  

}));




const Forecast = (props) => {

  const {  forecast , city , textChanged , updatedTime, suggestions} = props;


  
  const getDay = (index) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[index];
  }
  
  const getDateString = (seconds) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(seconds * 1000);
    return ` ${date.getDate()} ${months[date.getMonth()]} `;
  }
  
  const getCurrentTemp = (temps) => {
    const hours = new Date(Date.now()).getHours();
  
    if (hours >= 6 && hours < 12) {
      return Math.round(temps.morn);
    } else if (hours >= 12 && hours < 18) {
      return Math.round(temps.day);
    } else if (hours >= 18 && hours < 24) {
      return Math.round(temps.eve);
    } else {
      return Math.round(temps.night);
    }
  }
  
  const isDay = () => {
    const hours = new Date(Date.now()).getHours();
    return hours >= 7 && hours <= 20 ? true : false;
  }
  
  const handleUpdateTemperature = () => {
    textChanged(city);
  }
  const classes = useStyles();
  
  const today = forecast[0];
  let backImg = null;
      if(city==='Belgrade')
          backImg = `url(${"assets/images/bg.jpg"})`;
      else
        backImg = `url(${"assets/images/ns.jpg"})`;
    return (
      

      <div className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <div className={classes.wrapper}>
          <Grid
            container
            spacing={0}
            style={{ minHeight: '500px'}}
          >
            <Grid item xs={4}>
              <Box className={classes.weather}>
                <Box item style={{display:'flex', width:'300px'}}>
                  <Box flexGrow={1}>

                    <div className={classes.temperature}>{`${getCurrentTemp(today.temp)}°`}</div>
                    <Typography className={classes.weatherType}>{today.weather[0].description}</Typography>
                  </Box>

                    {/* <div className={classes.dot}></div> */}
                    <Box >
                      <i className={`wi wi-owm-${isDay() ? 'day' : 'night'}-${today.weather[0].id}`}  style={{float:'right'}}></i>
                    </Box>
                </Box>
                <Box item alignSelf="flex-end">
                  <Box  style={{marginLeft:10,maxWidth:250, display:'flex', alignItems:'center'}}>
                    <IconButton onClick={handleUpdateTemperature}>
                      <i class="material-icons" style={{fontSize:20, marginTop:0, color:'white'}} >
                    refresh
                    </i>
                    </IconButton>
                    
                    <Typography>Updated <b>{updatedTime} mins </b>ago</Typography>
                  </Box>
                </Box>
              </Box>
              <Box flexWrap="wrap" className={classes.weatherFeature}>
                <Box style={{ padding:'0px 25px '}}>
                  <p>{`${Math.round(today.humidity)}`}%
                    <br/>Humidity</p>
                </Box>
                <Box style={{  padding:'0px 25px'}}>
                  <p>{`${Math.round(today.humidity)}`}%<br/>Humidity</p>

                </Box>

                <Box style={{  padding:'0px 25px'}}>
                  <p>{`${Math.round(today.humidity)}`}%<br/>Humidity</p>

                </Box>

                <Box style={{  padding:'0px 25px'}}>
                  <p>{`${Math.round(today.humidity)}`}%<br/>Humidity</p>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box className={classes.forecast} 
              
              style={{backgroundImage: backImg}}>
                <Box>
                  <div className={classes.menu}>
                    <IntegrationSelect city={city} onChange={(city) => {textChanged(city)}} suggestions={suggestions}></IntegrationSelect>
                  </div>
                  <div className={classes.dateRow}>
                    <Typography className={classes.currentDate}>{getDateString(today.dt)}</Typography>
                    
                  </div>
                </Box>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  alignSelf="flex-end"

                >

                  <Box item>
                    <Box
                      display="flex"
                      alignItems="flex-start"
                      className={classes.weekList}
                    >
                    {forecast.slice(1).map(day => (
                            <Box className={classes.everyDay} key={day.dt}>
                                <i className={`wi wi-owm-${day.weather[0].id}`}></i>
                                <p>{`${Math.round(Object.values(day.temp).reduce((sum, current) => sum + current) / Object.values(day.temp).length)}°`}</p>
                                <h5>{getDay(new Date(day.dt * 1000).getDay())}</h5>
                            </Box>
                    ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
    );
  }

export default Forecast;