import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import truckImg from '../../assets/shipping-truck.png';
import dispensaryImg from '../../assets/pharmacy.png';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__welcome'>
        <h1>Welcome to</h1>
        <h1>Dimebags Delivery</h1>
        <p className='landing-text'>We thank you for your interest in working as a Dimebags partner.
         Please select the appropriate contact form below.</p>
      </div>
      <div className='landing__options'>
        <Link to='/driver-signup' className='route-link'>
          <img src={truckImg} alt='delivery truck'/>
          <p>Driver signup</p>
        </Link>
        <div className='divider'></div>
        <Link to='/dispensary-signup' className='route-link'>
          <img src={dispensaryImg} alt='dispensary icon'/>
          <p>Dispensary signup</p>
        </Link>
      </div>
      <p className='questions'>Have questions? Email us at nick@dimebagsdelivery.com</p>

    </div>
  )
}

export default Landing;