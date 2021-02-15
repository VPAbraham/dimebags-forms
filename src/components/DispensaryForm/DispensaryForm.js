import React, { Component } from 'react';
import './DispensaryForm.scss';
import * as emailjs from 'emailjs-com';
import { Button } from 'reactstrap';
import apiKeys from '../../js/apiKeys';


class DispensaryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      company: '',
      locationnum: '',
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
      company, 
      locationnum
    } = this.state;

    let templateParams = {
      first_name: firstname,
      last_name: lastname,
      phone,
      email,
      company,
      locationnum,
      contacttype: 'dispensary'
    };
    emailjs.send(
      apiKeys.SERVICE,
      apiKeys.DISP_TEMPLATE_ID,
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
            <label className="">First Name</label>
            <input 
              id='form-input' 
              className='firstname'
              onChange={this.handleChange}
              name='first-name' 
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
            <label>Company</label>
            <input 
              id='form-input' 
              className='company' 
              name='company'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Number of Locations</label>
            <input 
              id='form-input' 
              className='locationnum' 
              name='location-num'
              onChange={this.handleChange}
            />
          </div>
            {this.state.isSubmitted ? <p className='success-msg'>Thanks for submitting your information! We will get in touch shortly!</p> : submitButton} 
        </form>
      </div>
    )
  }
}

  export default DispensaryForm;