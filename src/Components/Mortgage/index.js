import React from 'react';
import './index.css';
import logo from '../../assets/clear_head.png'


import Calculations from './Calculations';
import Display from './Display';
import Greeting from './Greeting';
import Pill from './Pill';


function Mortgage() {
  return (
    <main className='calculator'>
      <Greeting 
        message='Hello, Clearhead team!'
        img_src={logo}
      />
      <section className='pill_container'>
        <Pill 
          className='mortgage_pill active'
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
  );
}

export default Mortgage;