import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './DriverForm.scss';
import { Button } from 'reactstrap';
import apiKeys from '../../js/apiKeys';


class DriverForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      badgeId: '',
      isSubmitted: false
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.className]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { 
      firstname, 
      lastname, 
      phone,
      email, 
      badgeId
    } = this.state;

    let templateParams = {
      first_name: firstname,
      last_name: lastname,
      phone,
      email,
      badgeId,
      contacttype: 'driver'
    };
    emailjs.send(
      apiKeys.SERVICE,
      apiKeys.DRIVER_TEMPLATE_ID,
      templateParams,
      apiKeys.USER_ID
    )
    .then(
      response => {
        console.log(response.text)
      } ,
      error => {
        console.log('error on delivery form', error.text)
      }
    )
    
    this.setState({isSubmitted: true});
  }

  render() {
    const submitButton = <Button type='submit' onClick={(e) => {this.handleSubmit(e)}}>SUBMIT INFORMATION</Button>
    return (
      <div className='driver-form'>
        <form className='signup-form'>
          <div>
            <label>First Name</label>
            <input 
              id='form-input' 
              className='firstname'
              name='first-name' 
              onChange={this.handleChange} 
              required 
            />
          </div>
          <div>
            <label>Last Name</label>
            <input 
              id='form-input' 
              className='lastname'
              name='last-name' 
              onChange={this.handleChange} 
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input 
              id='form-input' 
              className='phone'
              name='phone' 
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input 
              id='form-input' 
              className='email'
              name='email'
              onChange={this.handleChange} 
              required
            />
          </div>
          <div>
            <label>MED Badge ID Number</label>
            <input
              className='badgeId' 
              id='form-input'
              name='badge-id' 
              onChange={this.handleChange} 
            />
          </div>
          {this.state.isSubmitted ? <p className='success-msg'>Thanks for submitting your information! We will get in touch shortly!</p> : submitButton} 
        </form>
      </div>
    )
  }
}

  export default DriverForm;