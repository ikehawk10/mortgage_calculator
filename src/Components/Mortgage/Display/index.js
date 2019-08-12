import React from 'react';
import './index.css';


function Display({payment}) {
  return (
    <div className="display_container">
      <div className='monthly_cost'>${payment}<span className='term'>/mo</span></div>
      

    </div>
  );
}

export default Display;