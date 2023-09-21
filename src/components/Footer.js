import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <div>
        <div className='footer-main' id='contact'>
          <p>Duluth, MN</p>
          <a href='mailto: arimarine23@gmail.com'>Email Me</a>
          <a href='tel:+13019221963'>Call Me</a>
          <p>Text Me: (301) 922-1963</p>
        </div>
        <p id='copyright'>Copyright  &#169; Marine Studios 2023</p>
    </div>
  );
}


export default Footer;