import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';


// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]

// const data = {
//     temperature : 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal'
// }

const api_key= "8dc6f49ddb2df3c07eb229a45f0bd47a";
const base_url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    
    constructor() {
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity( this.props.city );
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps !== this.props.city ) {
            this.setState( { forecastData: null } );
            this.updateCity( nextProps.city )
        }
    }

    updateCity( city ) {
        const url_forecast = `${ base_url }?q=${ this.props.city }&appid=${ api_key }`;

        fetch( url_forecast )
            .then( data => ( data.json() ) )
            .then( weather_data => {
                console.log( weather_data );

                const forecastData = transformForecast( weather_data );
                console.log(forecastData);
                
                this.setState( { forecastData } );
            });
    }

    renderForecastItemDays( forecastData ) {
        return forecastData.map( forecast => ( 
            <ForecastItem 
                key={ `${ forecast.weekDay }${ forecast.hour }` }
                weekDay={ forecast.weekDay } 
                hour={ forecast.hour } 
                data={ forecast.data }>
            </ForecastItem>
        ));
    }

    renderProgress = () => {
        return 'Cargando pronostico extendido...';
    }

    render () {
        const { city } =this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>
                    Pronostico Extendido para { city }
                </h2>

                { forecastData ? this.renderForecastItemDays( forecastData ) : this.renderProgress() }
            </div>
        );
    }
}

ForecastExtended.propoTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;