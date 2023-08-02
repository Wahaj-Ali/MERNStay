import React from 'react';
import hotel1 from '../../assets/hotel1.jpg';
import apartment from '../../assets/appartment.jpg';
import resort from '../../assets/resort.jpg';
import './PropertyTypes.css';

export const PropertyTypes = () => {
  return (
    <div className='PropertyType'>
      <div className='pTypeItem'>
        <img src={hotel1} alt="Property Type" className="pTypeImg" />
        <div className="pTypeTitles">
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className='pTypeItem'>
        <img src={apartment} alt="Property Type" className="pTypeImg" />
        <div className="pTypeTitles">
          <h1>Appartments</h1>
          <h2>223 Appartments</h2>
        </div>
      </div>
      <div className='pTypeItem'>
        <img src={resort} alt="Property Type" className="pTypeImg" />
        <div className="pTypeTitles">
          <h1>Resorts</h1>
          <h2>33 Resorts</h2>
        </div>
      </div>
      <div className='pTypeItem'>
        <img src={resort} alt="Property Type" className="pTypeImg" />
        <div className="pTypeTitles">
          <h1>Villas</h1>
          <h2>982 Villas</h2>
        </div>
      </div>
      <div className='pTypeItem'>
        <img src={resort} alt="Property Type" className="pTypeImg" />
        <div className="pTypeTitles">
          <h1>Cabins</h1>
          <h2>1057 Cabins</h2>
        </div>
      </div>
    </div>
  )
}
