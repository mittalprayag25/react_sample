import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../../actions';
import './assets/confirmation.scss';

class EmailConfirmation extends Component {
  constructor(props) {
    super(props);
    this.resendConfirmationMail = this.resendConfirmationMail.bind(this);
    this.url = 'http://localhost:3030/users/';
    this.mailerContent = {
      from: 'Sender Name <test@gmail.com> ',
      to: 'Recipient <ab@dfd.com>',
      subject: 'Confirmation Mail',
      text: 'Please verify this link',
      html: 'verify'
    };
  }

  resendConfirmationMail() {
    this.url = this.url + this.props.emailConfirmationState.auth.emailToken; //eslint-disable-line
    this.clickableUrl = '<a href="' + `${this.url}` + '">Verify Account</a>';
    this.mailerContent.html = 'Please verify this link : ' + this.clickableUrl;
    this.props.resendConfirmationMail(this.mailerContent);//eslint-disable-line
  }
  render() {
    return (
      <div className='email-confirmation-container'>
        {
          <div>
            <p>A verification email has been sent</p>
            <p>Check your email and follow the link to finish the signup process</p>
            <p>
              <button onClick={this.resendConfirmationMail}>Resend Verification Email</button>
            </p>
          </div>
        }
        {
          this.props.emailConfirmationState.auth.mailSentStatus === 201 ? <span> Verification email has been sent</span> : null //eslint-disable-line
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    emailConfirmationState: { ...state }
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);
