import React from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Trending } from '../components/trending/Trending';
import '../assets/styles/Home.css';
import { PropertyTypes } from '../components/PropertyTypes/PropertyTypes';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Trending />
          <h1 className="typeHeading">Browse by property type</h1>
          <PropertyTypes />
        </div>
    </div>
  )
}
