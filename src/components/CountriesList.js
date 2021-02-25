import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountriesList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.countries.map((singleCountry, index) => {
                    return <div key={index}>
                    <Link to={`/${singleCountry.cca3}`}>{singleCountry.name.common}</Link>
                    </div>
                    })
                }
            </div>
        )
    }
}
