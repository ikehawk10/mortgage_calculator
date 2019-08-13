import React from 'react';
import './index.css';
import formateNumbers from '../../../utils/formateNumbers';


function Display({payment}) {
  return (
    <div className="display_container">
      <div className='monthly_cost'>${formateNumbers(payment)}<span className='term'>/mo</span></div>
      

    </div>
  );
}

export default Display;