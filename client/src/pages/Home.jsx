import React from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Trending } from '../components/trending/Trending';
import '../assets/styles/Home.css';
import { PropertyTypes } from '../components/PropertyTypes/PropertyTypes';
import { UniqueProperties } from '../components/UniqueProperties/UniqueProperties';
import { EmailSub } from '../components/EmailSubscription/EmailSub';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Trending />
        <h1 className="homeHeading">Browse by property type</h1>
        <PropertyTypes />
        <div className="uniquePDesc">
          <h1 className="homeHeading">Stay at our top unique properties</h1>
          <h2 className="homeText">From castles and villas to boats and igloos, we have it all</h2>
        </div>
        <UniqueProperties />
        <EmailSub />
        <Footer />
      </div>
    </div>
  )
}
