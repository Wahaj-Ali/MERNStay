import React from 'react';
import unique from '../../assets/unique1.jpg';
import './UniqueProperties.css';

export const UniqueProperties = () => {
  return (
    <div className='uniquePropertyList'>
      <div className="uniquePItem">
        <img src={unique} alt="Unique Property" className="uPImg" />
        <h1 className="uniqueName">Aparthotel Stare Miasto</h1>
        <h2 className="uniqueTxt">Old Town, Poland, Kraków</h2>
        <h2 className="uniqueTxt">Starting from <span className="price">PKR 37,305</span></h2>
        <h2 className="uniqueRating"><span className="rating">9.0</span> Excellent - 2,248 reviews</h2>
      </div>
      <div className="uniquePItem">
        <img src={unique} alt="Unique Property" className="uPImg" />
        <h1 className="uniqueName">Aparthotel Stare Miasto</h1>
        <h2 className="uniqueTxt">Old Town, Poland, Kraków</h2>
        <h2 className="uniqueTxt">Starting from <span className="price">PKR 37,305</span></h2>
        <h2 className="uniqueRating"><span className="rating">9.0</span> Excellent - 2,248 reviews</h2>
      </div>
      <div className="uniquePItem">
        <img src={unique} alt="Unique Property" className="uPImg" />
        <h1 className="uniqueName">Aparthotel Stare Miasto</h1>
        <h2 className="uniqueTxt">Old Town, Poland, Kraków</h2>
        <h2 className="uniqueTxt">Starting from <span className="price">PKR 37,305</span></h2>
        <h2 className="uniqueRating"><span className="rating">9.0</span> Excellent - 2,248 reviews</h2>
      </div>
      <div className="uniquePItem">
        <img src={unique} alt="Unique Property" className="uPImg" />
        <h1 className="uniqueName">Aparthotel Stare Miasto</h1>
        <h2 className="uniqueTxt">Old Town, Poland, Kraków</h2>
        <h2 className="uniqueTxt">Starting from <span className="price">PKR 37,305</span></h2>
        <h2 className="uniqueRating"><span className="rating">9.0</span> Excellent - 2,248 reviews</h2>
      </div>
    </div>
  )
}
