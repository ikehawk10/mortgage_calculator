import React from 'react';
import './index.css';

function Pill({className, label}) {
  return (
    <div className={`pill ${className}`}>
      <span className={`${className}_copy`}>
        {label}
      </span>
    </div>
  );
}

export default Pill;