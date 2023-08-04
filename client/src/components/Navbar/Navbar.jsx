import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const styles = {
  button: {
    color: '#003580',
    background: '#fff',
    marginLeft: '20px',
    '&:hover': {
      // Define styles for when the button is being hovered over
      // For example, you can change the background color on hover
      background: '#003580',
      color: '#fff',
    },
  },
};

export const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="navContainer">
        {/* <span className="logo">MERNStay</span> */}
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block", fontWeight:'500', fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}}>MERNStay</Typography>
        <div className="navItems">
          <Button variant="outlined" size="small" sx={styles.button}>Register</Button>
          <Button variant="outlined" size="small" sx={styles.button}>Sign In</Button>
        </div>
      </div>
    </div>

    //Material UI

    // <AppBar position="static">
    //   <Toolbar >
    //     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { sm: "none", xs: "block" } }}>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //       MERNStay
    //     </Typography>
    //   </Toolbar>
    //   </AppBar>
  )
}

