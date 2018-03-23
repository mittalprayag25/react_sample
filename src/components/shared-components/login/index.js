import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../actions';
import './assets/login.scss';
import SocialAuthentication from './../social-authentication';

/* eslint-disable */
class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {strategy: 'local'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  handleSubmit(event) {
    if((this.state.email != undefined) && (this.state.password != undefined)){
      this.props.authenticateUser(this.state);//eslint-disable-line
      event.preventDefault();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    if([name][0] !== 'confirmPassword') {
      this.setState({ [name]: value });
    }
  }

  forgotPassword(){
    this.props.retrievePassword();
  }

  componentWillReceiveProps(){
    if(this.props.login.auth.isError){
      alert('Enter valid credentials');
    }
  }
  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.handleSubmit}>
          <input type="email" className='input_item' name="email" placeholder="Email Id/ Mobile No." onChange={this.handleChange} required/> <br />
          <input type="password" className='input_item' name="password" placeholder="Password" onChange={this.handleChange} required/> <br />
          <div className='password-container'>
            <div className='show-password'>
              <input type='checkbox' />
              <span>Show password</span>
            </div>
            <div className='forgot-password'>
              <span className="forgot-password" onClick={this.forgotPassword}>Forgot Password</span>
            </div>
          </div>
          <input type='submit' className='button-login' name="submit" value='Login' /><br />
          <div className='separator'>
            <span className='divider-line' />
            <span className='or-separator'>Or</span>
            <span className='divider-line' />
          </div>
          <SocialAuthentication />
          <div className='swap-form'><span>New to the website?</span><span className='redirect-signup'>Sign Up</span></div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: { ...state }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);