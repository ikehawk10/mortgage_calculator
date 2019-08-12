import React, { Component } from 'react';
import './index.css';

import Input from '../Input';
import RangeInput from '../Range_Input'

class Calculations extends Component {
  constructor() {
    super();

    this.state = {
      home_value: null,
      down_payment: null,
      loan_term: null,
      interest: null,
    }
  }

  
getHomeValue = (amount) => {
  this.setState({ home_value: amount })
}


getDownPayment = (amount) => {
  this.setState({ down_payment: amount})
}

getInterest = (amount) => {
  this.setState({ interest: amount})
}


  render() {
    return (
      <div className="calculations_container">
        <form>
          <Input
            getValue={this.getHomeValue}
            className='input home_price'
            type='number'
            label='Home Price'
            placeholder='$250,000'
          />
          <RangeInput
            className='input home_price'
            type='range'
            min="0"
            max="10000000"
          />
          <Input 
            getValue={this.getDownPayment}
            className='input down_payment'
            type='number'
            label='Down Payment'
            placeholder='$50,000'
          />
          <Input 
            getValue={this.getInterest}
            className='input interest'
            type='number'
            label='Interest %'
          />
        </form>
      </div>
    );
  }
  
}


export default Calculations;