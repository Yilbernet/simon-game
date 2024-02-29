import React from 'react';
import './styles/playIa.css';

const PlayIa = ({isIa}) => {
  return (
    <div className={`playIa ${isIa?'active':''}`}>
        <div className='playIa__border'>
            <p><span>I.</span><span>A.</span></p>
        </div>
    </div>
  )
}

export default PlayIa;