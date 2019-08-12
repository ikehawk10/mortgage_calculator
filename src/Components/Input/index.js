import React, { Component } from 'react';
import './index.css';


class Input extends Component {
  constructor() {
    super();

    this.state = {
      value: null,
    };
  }
  
  handleValueChange = (e) => {
    const value = e.target.value;
    this.props.getValue(value);

    this.setState({ value })
  }

  render() {
    const { type, value, placeholder } = this.props;
    return (
      <div class='input_container'>
        <label class='input_label'>
          {this.props.label}:
        </label>
        <input 
          className='number_input'
          {...{type}}
          onChange={this.handleValueChange} 
          {...{value}}
          {...{placeholder}}
        />
      </div>
    )
  }
}

export default Input;