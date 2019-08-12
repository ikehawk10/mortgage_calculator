import React, { Component } from 'react';
import './App.css';

import Mortgage from './Components/Mortgage';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: null,
      property_tax: null,
      insurance: null,
    }
  }

  setValue = mortgage => {
    this.setState({ mortgage });
  }

  render() {
    return (
      <div className="app">
        <Mortgage getMorgage={this.setValue}/>
      </div>
    );
  }
}

export default App;
