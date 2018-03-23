import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../../actions';
import './assets/change-password.scss';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.updateNewPassword = this.updateNewPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
    };
  }

  updateNewPassword(event) {
    if((this.state.password !== undefined) && (this.state.confirmPassword !== undefined)) {
      if(this.state.password === this.state.confirmPassword) {
        this.props.updatePassword(this.state, this.props.token);//eslint-disable-line
        event.preventDefault();
      } else {
        alert('Password and confirm password does not match');//eslint-disable-line
      }
    } else {
      alert('enter required fields.');//eslint-disable-line
    }
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='forgot-password-container'>
        <div className='forgot-password-box'>
          <div className='forgot-password-form'>
            <form onSubmit={this.updateNewPassword}>
              <input type='password' name="password" placeholder='New Password' className='input-text' onChange={this.handleChange} required />
              <input
                type='password'
                name="confirmPassword"
                placeholder='Confirm Password'
                className='input-text'
                onChange={this.handleChange}
                required
              />
              <input type='submit' value='Update Password' className='forgot-password-submit' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: { ...state }
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
