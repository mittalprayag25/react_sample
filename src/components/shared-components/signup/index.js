import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../actions';
import SocialAuthentication from './../social-authentication';
import './assets/signup.scss';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { isVerified: false, isActive: false, isEmailOption: true, isOtpOption: false };//eslint-disable-line 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailOption = this.emailOption.bind(this);
    this.otpOption = this.otpOption.bind(this);
  }

  emailOption() {
    this.setState({ isEmailOption: true, isOtpOption: false });
  }

  otpOption() {
    this.setState({ isEmailOption: false, isOtpOption: true });
  }

  handleSubmit(event) {
    if(this.state.isEmailOption) {
      this.props.userEmailSignup(this.state);//eslint-disable-line
    } else if(this.state.isOtpOption) {
      this.props.actions.userOTPSignup();//eslint-disable-line
      alert('otp yet to be integrated');//eslint-disable-line
    }
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    if([name][0] !== 'confirmPassword') {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div className="form_box">
        <form onSubmit={this.handleSubmit}>
          <div className='name'>
            <input
              type="text"
              className='input_item input-item-first-name'
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              className='input_item input-item-last-name'
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
          </div><br />
          <input type="email" className='input_item' name="email" placeholder="Email Address" onChange={this.handleChange} required /> <br />
          <input type="number" className='input_item' name="phoneNumber" placeholder="Contact Number" onChange={this.handleChange} required /> <br />
          <input type="password" className='input_item' name="password" placeholder="Password" onChange={this.handleChange} required /> <br />
          <input
            type="password"
            className='input_item'
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={this.handleChange}
            required
          /> <br />
          <div className="form_radio">
            <p>How do you want to verify your account?</p> &nbsp;
            <input type="radio" name="verify" value="email" checked={this.state.isEmailOption} onClick={this.emailOption} />Email &nbsp;
            <input type="radio" name="verify" value="otp" checked={this.state.otpOption} onClick={this.otpOption} />OTP
          </div>
          <input type='submit' value='Sign Up' className='button-signup' />
          <span className='label-terms-conditions'>By signing up you agree to our T&C</span>
          <div className='separator'>
            <span className='divider-line' />
            <span className='or-separator'>Or</span>
            <span className='divider-line' />
          </div>
          <SocialAuthentication />
          <div className='swap-form'><span>Already Registered?</span><span className='redirect-login'>Log In</span></div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signup: { ...state }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);