import React from 'react';
import trnd1 from '../../assets/trending1.jpg';
import trnd2 from '../../assets/trending2.jpg';
import './Trending.css';

export const Trending = () => {
  return (
    <div className='trending'>
      <div className="trendingItem">
        <img src={trnd2} alt="trending" className='trendingImg'/>
        <div className="trendingTitles">
          <h1>Dublin</h1>
          <h2>100 properties</h2>
        </div>
      </div>
      <div className="trendingItem">
        <img src={trnd1} alt="trending" className='trendingImg'/>
        <div className="trendingTitles">
          <h1>Moscow</h1>
          <h2>120 properties</h2>
        </div>
      </div>
      <div className="trendingItem">
        <img src={trnd2} alt="trending" className='trendingImg'/>
        <div className="trendingTitles">
          <h1>Moscow</h1>
          <h2>120 properties</h2>
        </div>
      </div>
    </div>
  )
}
