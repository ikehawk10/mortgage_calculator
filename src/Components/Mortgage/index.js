import React, { Component } from 'react';
import './index.css';

import Calculations from './Calculations';
import Display from './Display';


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
        <Calculations getPayment={this.getPayment}/>
        <Display payment={this.state.monthly_payment} />
      </main>
    );
  } 
}

export default Mortgage;