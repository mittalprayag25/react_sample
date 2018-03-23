import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../../actions';
import './assets/otp.scss';

class OtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className='otp-verify-container'>
        <div className='otp-box'>
          <div className='otp-form'>
            <input type='text' name="otp" placeholder='Enter OTP' className='otp-form-input-text' />
            <input type='submit' value='Verify OTP' className='otp-form-submit' />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ActionCreators, dispatch) };
}
//export default EmailConfirmation;
export default connect(mapStateToProps, mapDispatchToProps)(OtpVerification);
