import React from 'react';
import './Navbar.css';

function Navbar() {
  return(
    <div>
      <nav className='navbar'>
        <div className='business-name'>
          <a href='#home' id='business-name'>Marine Studios</a>
        </div>
        <ul className='navlinks'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;