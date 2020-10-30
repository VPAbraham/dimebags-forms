import React from 'react';
import './DispensarySignUp.scss';
import DispensaryForm from '../../components/DispensaryForm/DispensaryForm';
import { Link } from 'react-router-dom';
import Landing from '../Landing/Landing';
import backBtn from '../../assets/back-arrow.png';

const DispensarySignup = () => {
  return (
    <div className='sign-up'>
      <div className='home-heading'> 
        <h1>Dimebags Delivery</h1>
        <h3>Seeking Delivery Partners</h3>
        <p>Fill out the below form and we will get in touch with you, regarding partnership oportunities.</p>
      </div>
      <DispensaryForm />
      <Link to='/' >
        <div className='back-btn'>
          <p>BACK</p>
        </div>
      </Link>
    </div>
  )
}

export default DispensarySignup;