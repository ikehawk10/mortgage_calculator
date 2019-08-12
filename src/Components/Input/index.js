import React, { Component } from 'react';
import './index.css';


class Input extends Component {

  state = {
    value: '',
    placeholder: ''
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({ value })
  }

  render() {

    const InputContainer = ({type, label}) => (
      <div class='input_container'>
        <label >
          {label}:
        </label>
        <input {...{type}}
          onChange={this.handleChange} 
          value={this.state.value} 
          placeholder={this.state.placeholder}
        />
      </div>
    )

    return (
      <InputContainer />
    )
  }
}

export default Input;