import React, { Component } from 'react';
import './App.css';
import logo from './assets/clear_head.png'
import { VictoryPie } from 'victory';


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
    const property_tax = mortgage * 0.27;
    const insurance = mortgage * 0.08;
    console.log(this.state)
    this.setState({ mortgage, property_tax, insurance });
  }

  render() {
    const data = [this.state];
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
        <Mortgage getMortgage={this.setValue}/>
        <VictoryPie {...{data}}/>
      </div>
    );
  }
}

export default App;
