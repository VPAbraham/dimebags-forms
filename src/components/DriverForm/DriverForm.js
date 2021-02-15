import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './DriverForm.scss';
import { Button } from 'reactstrap';


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
      'default_service',
      'template_FOllX5rW',
      templateParams,
      '1a027b021f2ecb3f71a4071beb0f3e0a'
    ).then(response => console.log(response))

    this.setState({isSubmitted: true});
  }

  render() {
    const submitButton = <Button type='submit' onClick={(e) => {this.handleSubmit(e)}}>SUBMIT INFORMATION</Button>
    return (
      <div className='driver-form'>
        <form className='signup-form'>
          <div>
            <label className="">First Name</label>
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
              required
            />
          </div>
          {this.state.isSubmitted ? <p className='success-msg'>Thanks for submitting your information! We will get in touch shortly!</p> : submitButton} 
        </form>
      </div>
    )
  }
}

  export default DriverForm;