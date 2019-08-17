import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {styled} from '@material-ui/styles';
import Forecast from './containers/Forecast/Forecast'
import Box from '@material-ui/core/Box'
import Chart from './components/chart'
import { Provider } from 'react-redux'
import store from './store/index'
import { connect } from 'react-redux'
const Application = styled(Box)`
  text-align: center;
  height: 100vh;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Card = styled(Box)`
  position: relative;
  top: 50%;
  margin-top: -300px;
  height: 600px;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .25);

  @media (max-width: 1000px) {
    top: 0;
    margin-top: 0;
    box-shadow: none;
  }
`;

const apiKey = 'dbb624c32c7f0d652500552c5ebbde56';

class App extends Component {
  state = {
    city: 'Belgrade',
    forecast: null,
    error: {
      state: false,
      message: ''
    },
    updateTime:null,
    elapsed:0,
    lastUpdated:this.props.start,
    time: 0,
    start: 0,
    suggestions: this.props.suggestionState.map(suggestion => ({
      value: suggestion.label,
      label: suggestion.label,
    })),

  }

  getForecastByCity = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&cnt=8&appid=${apiKey}`);
      const json = await response.json();
      if (json.cod !== '200') {
        this.setState({ error: { state: true, message: json.message } });
      } else {
        this.setState({time: 0});

        this.setState({
          time: this.state.time,
          start: Date.now() - this.state.time,
          isOn: true
        });
        clearInterval(this.timer);
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 10000);

        this.setState({ forecast: json.list });
      }
    } catch (error) {
      this.setState({ error: { state: true } });
    }
  }

  getUserLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    });
  }

  getForecastByCoordinates = async () => {
    try {
      const coords = await this.getUserLocation();
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coords.lat}&lon=${coords.lon}&units=metric&cnt=8&appid=${apiKey}`);
      const json = await response.json();
      if (json.cod !== '200') {
        this.setState({ error: { state: true } });
      } else {
        this.setState({ city: json.city.name, forecast: json.list });
      }
    } catch (error) {
      this.setState({ error: { state: true } });
    }
  }

  handleCityInput = (city) => {
    this.setState({ city });
    this.getForecastByCity();

  }

  clear = () => {
    this.setState({ city: '', forecast: null, error: { state: false } });
  }

  componentWillMount(){
    
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidMount(){
    if(!this.state.forecast)
      this.getForecastByCity();
    else
      ;

    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 10000);
  }

  render() {
    console.log("suggest" , this.props.suggestionState)
     var elapsed = Math.round(this.state.time / 100);
     var mins = ((elapsed / 10)/60).toFixed(0); 
    return (
        <MuiThemeProvider>
          <Application>
            <Card>
              {(this.state.forecast)? 
              <Forecast
                forecast={this.state.forecast}
                city={this.state.city}
                suggestions={this.state.suggestions}
                getForecastByCity={this.getForecastByCity}
                updatedTime={mins}
                textChanged={this.handleCityInput}/> : <div />}
            </Card>
          </Application>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps) (App);
