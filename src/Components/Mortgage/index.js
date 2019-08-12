import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/clear_head.png'


import Calculations from './Calculations';
import Display from './Display';
import Greeting from './Greeting';
import Pill from './Pill';


class Mortgage extends Component {
  constructor() {
    super();

    this.state = {
      monthly_payment: 0
    }
  }

  getPayment = monthly_payment => {
    this.setState({ monthly_payment });
  }

  render() {
    return (
      <main className='calculator'>
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
        <Calculations getPayment={this.getPayment}/>
        <Display payment={this.state.monthly_payment} />
      </main>
    );
  } 
}

export default Mortgage;