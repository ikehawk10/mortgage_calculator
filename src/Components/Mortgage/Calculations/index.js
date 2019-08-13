import React, { Component } from 'react';
import './index.css';

import mortgageCalculation from '../../../utils/mortgageCalculations';

class Calculations extends Component {
  constructor() {
    super();

    this.state = {
      home_value: 300000,
      down_payment: 60000,
      percentage: '',
      loan_term: 30,
      interest: 4,
      total: '',
      errors: {}
    }
  }

getPercentage = (home_value = this.state.home_value, down_payment = this.state.down_payment) => {
  const percentage = (100 / (home_value / down_payment)).toFixed(2);
  this.setState({ percentage });
}
componentDidMount() {
  let { home_value, down_payment } = this.state;
  this.getPercentage(home_value, down_payment);
}

  
handleHomePrice = (e) => {
  const home_value = e.target.value;
  this.setState({ home_value })
}


handleDownPayment = (e) => {
  const down_payment = e.target.value;
  this.setState({ down_payment })
}

handleInterest = (e) => {
  const interest = e.target.value;
  this.setState({ interest })
}

handleLoanChange = (e) => {
  const loan_term = e.target.value;
  this.setState({ loan_term })
}

handleFormSubmit = (e) => {
  e.preventDefault();
  const { home_value, down_payment } = this.state;
  const total = mortgageCalculation(this.state);
  let errors = {};

  if ( Number(down_payment) > Number(home_value)) {
    errors.down_payment ='Down payment cannot be greater than home value';
    return this.setState({ errors });
  }
  if (home_value < 50000) {
    errors.home_value = `Don't play, you aren't buying a house for less than $50,000...`;
    console.log(errors)
    return this.setState({ errors });
  }

  this.setState({ total, errors: [] });
  this.getPercentage()

  return this.props.getPayment(total);
}

  render() {
    const { home_value, down_payment, percentage, interest, loan_term, errors } = this.state;
    return (
      <div className="calculations_container">
        <form onSubmit={this.handleFormSubmit}>
          <label className='input_label'>
            Home Value:
          </label>
          $<input 
            className='number_input'
            type='number'
            onChange={this.handleHomePrice} 
            value={home_value}
          />
          {errors.home_value &&
            <span className='error'>{errors.home_value}</span>
          }
          <label className='input_label'>
            Down Payment:
          </label>
          $<input 
            className='number_input'
            type='number'
            onChange={this.handleDownPayment} 
            value={down_payment}
          />
          {errors.down_payment &&
            <span className='error'>{errors.down_payment}</span>
          }
          <label className='input_label'>
            Down Payment %
          </label>
          <input 
            className='number_input'
            type='number'
            disabled
            value={percentage}
          />
          <label className='input_label'>
            Loan Term
          </label>
          <select value={loan_term} onChange={this.handleLoanChange} className='term_length'>
            <option value={10}>10 Year Fixed</option>
            <option value={15}>15 Year Fixed</option>
            <option value={20}>20 Year Fixed</option>
            <option  value={30}>30 Year Fixed</option>
          </select>
          <label className='input_label'>
            Interest %
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handleInterest} 
            value={interest}
            placeholder={interest}
          />
          <input className='btn-submit' type='submit' value='Calculate' />
        </form>
      </div>
    );
  }
  
}


export default Calculations;