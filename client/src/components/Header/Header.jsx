import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Button, Typography } from '@mui/material';
import herobg from '../../assets/herobg.jpg';
import './header.css';
import { HeroSearch } from '../Hero Search/HeroSearch';

export const Header = ({type}) => {
  return (
    <>
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
      </div>
      { type !== "list" &&
        <>
      <div className="hero">
        <img id='hero-img' src={herobg} alt='hero-background'/>
        <div className="hero-desc">
          <h1 className="headerTitle">Homebound Wanderlust: Embrace the Journey.</h1>
          <Typography variant="h6" sx={{ display: 'flex', margin: '20px 0', fontWeight:600, fontFamily:'"Avenir Next",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;' }}>Where Joyful Homecomings Meet Thrilling Travels. Discover, Book, and Embrace Unforgettable Adventures.</Typography>
          <Button variant="contained" size='large'>Find your rental</Button>
        </div>
      </div>
      </>}
    </div>
    {type !== "list" &&
      <HeroSearch />}
    </>
  )
}
