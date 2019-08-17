import React from 'react';
import {styled} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { cyan500 } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  span {
    font-size: 12px;
  }
`;

const LocationBtn = styled(Button)`
  position: relative;
  padding: 0;
  font: inherit;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all .2s ease-in-out;
  }

  :hover::after {
    visibility: visible;
    transform: scaleX(1);
  }

  :active {
    color: "red";
  }

  :active::after {
    transition: none;
    background-color: "red";
  }
`;

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,   
      background: "linear-gradient(0deg, #dbedf9 0%, #defceb 100%)"
    },
    wrapper:{
      width:'800px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignzitems: 'center',
      height: '100%',
      background: "linear-gradient(0deg, #dbedf9 0%, #defceb 100%)"   
    },
}));

const Search = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh'}}
      >
        <div className={classes.wrapper}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh'}}
            >
              <form onSubmit={props.getForecastByCity}>
                <TextField
                  hintText="City"
                  value={props.city}
                  onBlur={(e) => props.textChanged(e.target.value)}
                />
              </form>
              <br />
              <span style={{fontSize:'12px'}}>or</span>
              <LocationBtn onClick={props.getForecastByCoordinates}>your current location</LocationBtn>
            </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Search;