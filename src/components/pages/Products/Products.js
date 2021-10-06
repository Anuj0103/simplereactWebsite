import React from 'react';
import '../../../App.css';
import './products.css';

export default function Products() {
  return (
    <body>
      <h1
        style={{
          color: '#F9F3DF',
          textDecoration: 'underline',
          marginTop: '20px',
          marginLeft: '-50px',
        }}
      >
        Our Clothing Products
      </h1>
      <div id='wrap'>
        <div id='columns' className='columns_4'>
          <figure>
            <img src='https://i.imgur.com/ruU04I6.jpg' />
            <figcaption>Green Checkered Shirt</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/sPxEkEI.jpg' />
            <figcaption>Green and Black Flowers</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/S3Umfmb.jpg' />
            <figcaption>Black Dots</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/x1IZjjy.jpg' />
            <figcaption>Red Flowy</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/Jv8IWKQ.jpg' />
            <figcaption>Yellow Button-Up</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/MpLejRu.jpg' />
            <figcaption>Put a Bird On It</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/SZmPJ7W.jpg' />
            <figcaption>Polka Dots</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/OiEMgMx.jpg' />
            <figcaption>Blue Spots</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>

          <figure>
            <img src='https://i.imgur.com/HolvggB.jpg' />
            <figcaption>Pink Dots</figcaption>
            <span className='price'>$44</span>
            <a className='button' href='#'>
              Buy Now
            </a>
          </figure>
        </div>
      </div>
    </body>
  );
}
