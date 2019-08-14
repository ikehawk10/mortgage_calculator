import React, { Component } from 'react';
import './App.css';
import logo from './assets/accenture.jpeg'

import Mortgage from './Components/Mortgage';
import Affortability from './Components/Affordability';
import Greeting from './Components/Mortgage/Greeting';
import Pill from './Components/Mortgage/Pill';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: null,
      property_tax: null,
      insurance: null,
      showMortgage: true,
    }
  }

  setValue = mortgage => {
    mortgage = Number(mortgage);
    const property_tax = mortgage * 0.27;
    const insurance = mortgage * 0.08;
    this.setState({ mortgage, property_tax, insurance });
  }

  handleClick = () => {
    this.setState({ showMortgage: !this.state.showMortgage });
  }

  render() {
    return (
      <div className="app">
        <Greeting 
          message='Greetings, Accenture team!'
          img_src={logo}
        />
        <section className='pill_container' onClick={this.handleClick}>
          <Pill 
            className={`mortgage_pill ${this.state.showMortgage ? 'active' : null}`}
            label='Mortgage Calculations'
          />
          <Pill 
            className={`affortability_pill ${this.state.showMortgage ? null : 'active'}`} 
            label='Affortability Calculations'
          />
        </section>
        {this.state.showMortgage &&
          <Mortgage data={this.state} getMortgage={this.setValue}/>
        }
        {!this.state.showMortgage &&
          <Affortability />
        }
      </div>
    );
  }
}

export default App;
