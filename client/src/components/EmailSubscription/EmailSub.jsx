import { Button } from '@mui/material';
import React from 'react';
import './EmailSub.css';

export const EmailSub = () => {
  return (
    <div className="subDiv">
      <h1 className="subTitle">Save time, save money!</h1>
      <p className="subText">Sign up and we'll send the best deals to you</p>
      <div className="subInput">
        <input type="email" id="email" name="email" placeholder='Your email address' required/>
        <Button className='subBtn' variant="contained">Subscribe</Button>
      </div>
    </div>
  )
};
