import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Button, Typography } from '@mui/material';
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <Typography sx={{ display: 'flex', gap: '10px' }}><HotelIcon />Hotels</Typography>
          </div>
          <div className="headerListItem">
            <Typography sx={{ display: 'flex', gap: '10px' }}><AirplanemodeActiveIcon />Flights</Typography>
          </div>
          <div className="headerListItem">
            <Typography sx={{ display: 'flex', gap: '10px' }}><DirectionsCarIcon />Car Rentals</Typography>
          </div>
          <div className="headerListItem">
            <Typography sx={{ display: 'flex', gap: '10px' }}><LocalTaxiIcon />Airport Taxis</Typography>
          </div>
        </div>
        {/* <div className="hero">
          <h1 className="headerTitle">Homebound Wanderlust: Embrace the Journey.</h1>
          <Typography variant="body1" sx={{ display: 'flex', margin: '20px 0' }}>Where Joyful Homecomings Meet Thrilling Travels. Discover, Book, and Embrace Unforgettable Adventures.</Typography>
        </div> */}
      </div>
    </div>
  )
}
