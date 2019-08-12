import React, { Component } from 'react';
import './index.css';


class RangeInput extends Component {
  constructor() {
    super();

    this.state = {
      value: null,
    };
  }

  render() {
    const { type, value } = this.props;
    return (
      <input
        className='number_input'
        {...{type}}
        onChange={this.handleValueChange} 
        {...{value}}
      />
    )
  }
}

export default RangeInput;