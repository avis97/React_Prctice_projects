import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav-bar'>
        <div>
            <img className='nav-img' src="/images/Frame 2 1.png" alt="nav_logo" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar