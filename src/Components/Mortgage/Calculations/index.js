import React, { Component } from 'react';
import './index.css';

class Calculations extends Component {
  constructor() {
    super();

    this.state = {
      home_value: '250,000',
      down_payment: '60,000',
      percentage: '',
      loan_term: '',
      interest: '',
      total: '',
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

handlePercentage = () => {
  let percentage;
  const { home_value, down_payment } = this.state 
  if (home_value && down_payment) {
    percentage =  100 / (home_value / down_payment);
    return this.setState({ percentage })
  } 
}

handleInterest = (e) => {
  const interest = e.target.value;
  this.setState({ interest })
}

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
}

  render() {
    const { home_value, down_payment, percentage, interest } = this.state;
    return (
      <div className="calculations_container">
        <form onSubmit={this.handleSubmit}>
          <label className='input_label'>
            Home Value:
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handleHomePrice} 
            value={home_value}
          />
          <label className='input_label'>
            Down Payment:
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handleDownPayment} 
            value={down_payment}
          />
          <label className='input_label'>
            Down Payment %
          </label>
          <input 
            className='number_input'
            type='number'
            onChange={this.handlePercentage} 
            value={percentage}
            placeholder={percentage}
          />
          <label className='input_label'>
            Loan Term
          </label>
          <select className='term_length'>
            <option value={10}>10 Year Fixed</option>
            <option value={15}>15 Year Fixed</option>
            <option value={20}>20 Year Fixed</option>
            <option defaultValue value={30}>30 Year Fixed</option>
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