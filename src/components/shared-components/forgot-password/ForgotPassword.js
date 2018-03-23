import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../../actions';
import './assets/forgot-password.scss';

class RetrievePassword extends Component {
  constructor(props) {
    super(props);
    this.submitforgotPasswordDetails = this.submitforgotPasswordDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
    };
  }

  submitforgotPasswordDetails(event) {
    if(this.state.emailId !== undefined) {
      this.props.submitforgotPasswordDetails(this.state);//eslint-disable-line
    } else {
      alert('Enter Email');
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
            <form onSubmit={this.submitforgotPasswordDetai}>
              <input type='text' name="emailId" placeholder='Enter Email' className='input-text' onChange={this.handleChange} required />
              <input type='submit' value='Update Password' className='forgot-password-submit' onClick={this.submitforgotPasswordDetails} />
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

export default connect(mapStateToProps, mapDispatchToProps)(RetrievePassword);
