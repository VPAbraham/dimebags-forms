import React from 'react';
import './DriverSignUp.scss';
import DriverForm from '../../components/DriverForm/DriverForm';
import { Link } from 'react-router-dom';

const DriverSignUp = () => {
  return (
    <div className='sign-up'>
      <div className='home-heading'>
        <h1>Dimebags Delivery</h1>
        <h3>Delivery Drivers Wanted</h3>
        <p>Fill out the below form and we will get in touch with you, regarding delivery driving.</p>
      </div>
      <DriverForm />
      <Link to='/' >
        <div className='back-btn'>
          <p>BACK</p>
        </div>
      </Link>
    </div>
  )
}

export default DriverSignUp;