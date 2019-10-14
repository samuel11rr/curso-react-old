import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ( { cities, onSelectedLocation } ) => {

    const handleWeatherLocationClick = city => {
        console.log('entra');
        onSelectedLocation(city);
    }

    const strToComponents = cities => (
        cities.map( city => ( 
            <WeatherLocation 
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }
                city={ city } 
                key={ city } /> 
        ))
    );

    return (
        <div> { strToComponents(cities) } </div>
    );
};

LocationList.prototypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
};

export default LocationList;