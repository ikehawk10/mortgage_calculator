import React from 'react';
import './index.css';

import Input from '../Input';

function Calculations() {
  return (
    <div className="calculations_container">
      <form>
        <Input 
          className='input'
          type='text'
          label='Home Price'
        />
      </form>
      
    </div>
  );
}

export default Calculations;