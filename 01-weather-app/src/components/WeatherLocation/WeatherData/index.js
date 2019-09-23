import React from 'react';
import Proptypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ( { data: { temperature, weatherState, humidity, wind } } ) => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={ temperature }
            weatherState={ weatherState }>
        </WeatherTemperature>
        
        <WeatherExtraInfo 
            humidity={ humidity } 
            wind={ wind }>
        </WeatherExtraInfo>
    </div>
);

WeatherData.prototypes = {
    data: Proptypes.shape({
        temperature: Proptypes.number.isRequired,
        weatherState: Proptypes.string.isRequired,
        humidity: Proptypes.number.isRequired,
        wind: Proptypes.string.isRequired
    }),
}

export default WeatherData;