import React from 'react';
import './index.css';
import formateNumbers from '../../../utils/formateNumbers';


function Display(props) {
  const { mortgage, property_tax, insurance } = props.payment;
  const payment = Math.round(mortgage + property_tax + insurance);
  return (
    <div className="display_container">
      <div className='monthly_cost'>Monthly Payment: ${formateNumbers(payment)}<span className='term'>/mo</span></div>
      

    </div>
  );
}

export default Display;