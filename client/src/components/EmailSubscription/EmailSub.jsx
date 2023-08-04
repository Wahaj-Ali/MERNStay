import { Button } from '@mui/material';
import React from 'react';
import './EmailSub.css';

export const EmailSub = () => {
  return (
    <div className="subDiv">
      <h1 className="subTitle">Conserve time, reduce expenses!</h1>
      <p className="subText">Subscribe to receive top-notch deals delivered to your inbox!</p>
      <div className="subInput">
        <input type="email" id="email" name="email" placeholder='Your email address' required/>
        <Button className='subBtn' variant="contained">Subscribe</Button>
      </div>
    </div>
  )
};
