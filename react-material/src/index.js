import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import 'weathericons/css/weather-icons.min.css'
import { Provider } from 'react-redux'
import ConfigureStore from './store'
ReactDOM.render(
    <Provider store= {ConfigureStore()}>
        <App start={Date.now()}/>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
