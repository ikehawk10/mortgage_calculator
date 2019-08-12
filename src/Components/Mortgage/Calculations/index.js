import React, { Component } from 'react';
import './index.css';

class Calculations extends Component {
  constructor() {
    super();

    this.state = {
      home_value: null,
      down_payment: null,
      loan_term: null,
      percentage: null,
    }
  }

  
handleHomePrice = (e) => {
  const home_value = e.target.value;
  this.setState({ home_value })
}


handleDownPayment = (e) => {
  const down_payment = e.target.value;
  this.setState({ down_payment })
}

handlePercentage = (amount) => {
  this.setState({ percentage: amount})
}


  render() {
    const { home_value, down_payment } = this.state;
    const percentage = 100 / (home_value / down_payment);
    return (
      <div className="calculations_container">
        <form>
          <label class='input_label'>
            Home Value:
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handleHomePrice} 
            value={home_value}
            placeholder='$250,000'
          />
          <label class='input_label'>
            Down Payment:
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handleDownPayment} 
            value={down_payment}
            placeholder='$60,000'
          />
          <label class='input_label'>
            %
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handlePercentage} 
            value={percentage}
            placeholder={percentage}
          />
        </form>
      </div>
    );
  }
  
}


export default Calculations;