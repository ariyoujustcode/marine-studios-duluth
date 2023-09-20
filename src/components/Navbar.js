import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return(
    <div>
      <nav className='navbar'>
        <div className='business-name'>
          <a href='#home' id='business-name' onClick={closeMenu}>Marine Studios</a>
        </div>
        <ul className={`navlinks ${menuOpen ? 'open' : ''}`}>
          <li><a href='#home' onClick={closeMenu} >Home</a></li>
          <li><a href='#about' onClick={closeMenu} >About</a></li>
          <li><a href='#portfolio' onClick={closeMenu} >Portfolio</a></li>
          <li><a href='#contact' onClick={closeMenu} >Contact</a></li>
        </ul>
        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;