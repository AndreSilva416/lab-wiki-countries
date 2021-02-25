import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'
import { Link, Route } from 'react-router-dom'

import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    countries: countries
  }
  
  render() {
    console.log(this.state.countries)
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
          <CountriesList countries={this.state.countries}/>
          <Route path='/countries/:id' component={CountryDetails}/>
        </div>
      </div>
    </div>
    )
  }
}
