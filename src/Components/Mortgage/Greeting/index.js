import React from 'react';
import './index.css';


function Greeting({message, img_src}) {
  return (
    <div className='banner_container'>
      <img 
        src={img_src}
        alt={`${img_src}_logo`} 
        className='company_image'
      />
      <aside className='greeting'>{message}</aside>
    </div>
  );
}

export default Greeting;