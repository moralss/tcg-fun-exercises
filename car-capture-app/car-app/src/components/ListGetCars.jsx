import { Component } from 'react';
import React from 'react';
import axios from 'axios';

class ListOfCars extends Component {
    constructor() {
        super()
        this.state = {
            cars: []
        }
    }
    render() {
        const { cars } = this.props;

        return (<div>
            <h1>list of cars </h1>
            {cars.map((car) => <div>
                <h1> car name {car.carName} </h1>
                <p> registrtion number {car.carRegistrationNumber} </p>
            </div>)}
        </div>);
    }
}


export default ListOfCars;