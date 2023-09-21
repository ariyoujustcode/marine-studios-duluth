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
          <a href='https://apps.apple.com/us/app/easeio/id1609934534' target='_blank'>
            <img id='ease' src='images/ease-io-marine-studios.webp' alt='EaseIO iOS app'></img>
          </a>
          <a href='https://lucidity.vercel.app/' target='_blank'>
            <div id='lucid'>Lucidity</div>
          </a>
          <a href='https://curb-herb-duluth.vercel.app/' target='_blank'>
            <img id='curb' src='images/marijuana-g3dad059d3_1280.png' alt='CurbHerb Delivery Services'></img>
          </a>
        </div>
        <div className='port-three'>
          <a href='https://intuit.ariyoujustcode.repl.co/index.html' target='_blank'>
            <div id='intuit'>Intuit</div>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Portfolio;