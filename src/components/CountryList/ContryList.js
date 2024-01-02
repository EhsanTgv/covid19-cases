import React from "react";
import Country from '../Country/Country'

const CountryList = (props) => {
    return (
        <div>
            {
                props.state.map(country => <Country state={country} />)
            }
        </div>
    )
}

export default CountryList;