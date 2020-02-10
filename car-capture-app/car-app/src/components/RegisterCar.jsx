import { Component } from 'react';
import React from 'react';
import axios from 'axios';




class CarRegistration extends Component {
    constructor() {
        super()

        this.state = {
            carRegistrationNumber: "",
            carName: ""
        }
    }

    render() {
        const { carRegistrationNumber, carName } = this.state;
        return (<div>
            <label htmlFor="">Register a new </label>
            <input
                onChange={(e) =>
                    this.setState({ carRegistrationNumber: e.target.value })}
                value={carRegistrationNumber}
                placeholder="car Registration number" type="text" />
            <input value={carName}
                onChange={(e) =>
                    this.setState({ carName: e.target.value })}
                type="text" placeholder="car name" />
            <button onClick={() => this.props.saveRegistation(this.state)}> Submit </button>
        </div>);
    }
}


export default CarRegistration;