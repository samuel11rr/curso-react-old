import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Mexico City',
            data: null
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch( api_weather )
            .then( resolve => resolve.json() )
            .then( data => {
                const newWeather = transformWeather(data);

                this.setState({
                    data: newWeather
                })

            } );
    }

    render() {

        const { city, data } = this.state;

        return ( 
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                { 
                    data ? <WeatherData data={ data }></WeatherData>
                    : <CircularProgress />
                }
            </div>
        )
    }
};

export default WeatherLocation;