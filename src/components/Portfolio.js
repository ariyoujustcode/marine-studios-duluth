import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return(
    <div>
      <div className='portfolio' id='portfolio'>
        <h3>Portfolio</h3>
        <div className='port-one'>
          <a href='https://gambills-barber-shop.ariyoujustcode.repl.co/#home' target='_blank'>
            <img id='gambill' src="images/Gambill's Family.png" alt='Gambill family barber shop site'></img>
          </a>
          <a href='https://nfrealmusic.ariyoujustcode.repl.co/' target='_blank'>
            <img id='nf' src='images/NF-Favicon.jpg' alt='NF Clone site'></img>
          </a>
          <a href='https://blend-io.web.app/' target='blank'>
            <div id='blend'>Blend</div>
          </a>
        </div>
        <div className='port-two'>
          <a href='#'>
            <img src='' alt=''></img>
          </a>
          <a href='#'>
            <img src='' alt=''></img>
          </a>
          <a href='#'>
            <img src='' alt=''></img>
          </a>
        </div>
        <div className='port-three'>
          <a href='#'>
            <img src='' alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Portfolio;