import React, { Component } from 'react';
import './App.css';
import logo from './assets/clear_head.png'


import Mortgage from './Components/Mortgage';
import Greeting from './Components/Mortgage/Greeting';
import Pill from './Components/Mortgage/Pill';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: null,
      property_tax: null,
      insurance: null,
    }
  }

  setValue = mortgage => {
    this.setState({ mortgage });
  }

  render() {
    return (
      <div className="app">
        <Greeting 
          message='Greetings, Clearhead team!'
          img_src={logo}
        />
        <section className='pill_container'>
          <Pill 
            className='mortgage_pill active'
            label='Mortgage Calculations'
          />
          <Pill 
            className='affortability_pill' 
            label='Affortability Calculations'
          />
        </section>
        <Mortgage getMorgage={this.setValue}/>
      </div>
    );
  }
}

export default App;
