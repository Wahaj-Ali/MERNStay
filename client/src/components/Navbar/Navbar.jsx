import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';

export const Navbar = () => {
  const navBtnStyle = {
    marginLeft: '20px',
    border: 'none',
    padding: '5px 10px',
    color: '#003580',
    backgroundColor: '#fff',
  };
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logo">MERNStay</span>
        <div className="navItems">
          <Button variant="outlined" className='navBtn'>Register</Button>
          <Button variant="outlined" className={navBtnStyle}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

