import React, { Component } from 'react';
import './App.css';
import logo from './assets/accenture.jpeg'

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
    mortgage = Number(mortgage);
    const property_tax = mortgage * 0.27;
    const insurance = mortgage * 0.08;
    this.setState({ mortgage, property_tax, insurance });
  }

  render() {
    return (
      <div className="app">
        <Greeting 
          message='Greetings, Accenture team!'
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
        <Mortgage data={this.state} getMortgage={this.setValue}/>
      </div>
    );
  }
}

export default App;
