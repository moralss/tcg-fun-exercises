import { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarRegistration from './components/RegisterCar';
import ListOfCars from './components/ListGetCars';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      cars: []
    }
  }


  componentWillMount() {
    this.getRegstationData()
  }

  async getRegstationData() {
    try {
      const { data } = await axios.get("http://localhost:3002/api/cars")
      this.setState({ cars: data })
    }
    catch (e) {
      console.log(e)
    }
  }


  async saveRegistationData(registationData) {
    try {
      await axios.post("http://localhost:5000/addedCars", registationData)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Car App </h1>
          <CarRegistration saveRegistation={this.saveRegistationData} />
          <ListOfCars cars={this.state.cars} />

        </header>
      </div>
    );
  }
}

export default App;
