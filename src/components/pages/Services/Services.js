import React from 'react';
import '../../../App.css';
import './Services.css';

export default function Services() {
  return (
    <div className='feat bg-gray pt-5 pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='section-head col-sm-12'>
            <h4>
              <span>Why Choose</span> Me?
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's
              <br />
              standard dummy text ever since the 1500s, when an unknown book.
            </p>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_one'>
                <i className='fa fa-globe'></i>
              </span>
              <h2>Modern Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_two'>
                <i className='fa fa-anchor'></i>
              </span>
              <h2>Creative Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_three'>
                <i className='fa fa-hourglass-half'></i>
              </span>
              <h2>Your Photoshoping</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_four'>
                <i className='fa fa-database'></i>
              </span>
              <h2>Business Growth</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_five'>
                <i className='fa fa-upload'></i>
              </span>
              <h2>Market Strategy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            <div className='item'>
              {' '}
              <span className='icon feature_box_col_six'>
                <i className='fa fa-camera'></i>
              </span>
              <h2>Retina Ready</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor Aenean massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
