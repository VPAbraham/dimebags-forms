import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import truckImg from '../../assets/shipping-truck.svg';
import dispensaryImg from '../../assets/pharmacy.svg';
import smoothLogo from '../../assets/dimebags-smooth-logo.png';
import paperLogo from '../../assets/dimebags-paper-logo.png';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__welcome'>
        <img className='landing__logo' src={smoothLogo} />
        <h3>Signup Forms</h3>
        <p className='landing-text'>We thank you for your interest in working with Dimebags Delivery.
         Please select the appropriate contact form below.</p>
      </div>
      <div className='landing__options'>
        <Link to='/driver-signup' className='route-link'>
          <img src={truckImg} alt='delivery truck'/>
          <p>Driver signup</p>
        </Link>
        {/* <div className='divider'></div> */}
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