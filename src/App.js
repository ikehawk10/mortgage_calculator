import React from 'react';
import './App.css';
import logo from './assets/clear_head.png'

import Calculations from './Components/Calculations';
import Display from './Components/Display';
import Greeting from './Components/Greeting';
import Pill from './Components/Pill';

function App() {
  return (
    <div className="app">
      <main className='calculator'>
        <Greeting 
          message='Hello, Clearhead team!'
          img_src={logo}
        />
        <section className='pill_container'>
          <Pill 
            className='mortgage_pill'
            label='Mortgage Calculations'
          />
          <Pill 
            className='affortability_pill' 
            label='Affortability Calculations'
          />
        </section>
        <Calculations />
        <Display />
      </main>
    </div>
  );
}

export default App;
