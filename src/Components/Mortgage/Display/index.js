import React from 'react';
import './index.css';


function Display() {
  const amount = '12,000'
  return (
    <div className="display_container">
      <div className='monthly_cost'>${amount}<span className='term'>/mo</span></div>
      

    </div>
  );
}

export default Display;