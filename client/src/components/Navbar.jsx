import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logo">MERNStay</span>
        <div className="navItems">
          <button className='navBtn'>Register</button>
          <button className='navBtn'>Sign In</button>
        </div>
      </div>
    </div>
  )
}
