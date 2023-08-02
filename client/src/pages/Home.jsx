import React from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Trending } from '../components/trending/Trending';
import '../assets/styles/Home.css';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Trending />
        </div>
    </div>
  )
}
