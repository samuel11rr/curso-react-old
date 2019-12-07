import React, { Component } from 'react';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const cities = [
  'Mexico City,mx',
  'Madrid,es',
  'London,uk',
  'Buenos Aires,ar'
]


class App extends Component {
  handleSelectedLocation = city => {
    console.log('handleSelectedLocation');
  }

  render() {
    return (
      <div className="App">
        <LocationList 
          cities={ cities }
          onSelectedLocation={ this.handleSelectedLocation }>
          </LocationList>
      </div>
    );
  }
}

export default App;
