import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <div className='logo '>
                <img className="brand-logo" src="/Images/brand_logo.png" alt="logo"/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
                <li href="#">Location</li>
            </ul>
            <button>login</button>
        </nav>
    </div>
  )
}

export default Navbar