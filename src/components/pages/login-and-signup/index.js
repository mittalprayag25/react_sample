/*eslint-disable*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { LoginTab, SignupTab } from './tabs';
import { ActionCreators } from '../../../actions';

import Signup from './../../shared-components/signup';
import Login from '../../shared-components/login';
import EmailConfirmation from './../../shared-components/email-confirmation/EmailConfirmation';
import OtpVerification from './../../shared-components/otp-verification/OtpVerification';
import ForgotPassword from './../../shared-components/forgot-password/ForgotPassword';
import ChangePassword from './../../shared-components/change-password/ChangePassword';

import Tabs from '../../shared-components/TabLayout';

import './assets/login-and-signup.scss';

function isEmpty(obj) {
  for (const key in obj) {
    if(obj.hasOwnProperty(key)) { return false; }
  }
  return true;
}


class LoginAndSignup extends Component {
  constructor(props) {
    super(props);

    const selectedTab = props.match.path.indexOf('signup') > -1 ? 1 : 0;

    this.props = props;
    this.showLoginScreen = true;
    this.showEmailConfirmationScreen = false;
    this.showOTPScreem = false;
    this.showForgotPassword = false;
    this.state = {
      tabs: [
        {
          label: <LoginTab />,
          component: <Login /> 
        },
        {
          label: <SignupTab />,
          component: <Signup />
        }
      ],
      selectedTab: selectedTab
    };
  }

  /**
   * Access token is stored in local storage
   */
  componentDidUpdate() {
    this.navigateUser();
  }

  navigateUser() {
    if(!isEmpty(this.props.signup.auth.userInfo)) {
      const accessToken = this.props.signup.auth.userInfo.accessToken;
      this.props.history.push({pathname: '/' });//eslint-disable-line 
    }
  }

  componentWillMount(){
    
    if(this.props.match.params.emailToken != undefined || this.props.match.params.emailToken != null){
       this.props.updateForgotPasswordState(this.props.match.params.emailToken);
    }
    this.navigateUser();
  }
  render() {
    console.log('render', this.props.signup);
    return (
      <div className='authentication'>
        {
          this.props.signup.auth.authStatus.isSignedUp ? <Tabs tabs={this.state.tabs}  selectedTab={this.state.selectedTab} /> : null
        }
        <div>
          {
          this.props.signup.auth.authStatus.isMailSent ? <EmailConfirmation /> : null
        }
        </div>
        <div>
          {
          this.props.signup.auth.authStatus.requiredOtp ? <OtpVerification /> : null
        }
        </div>
        <div>
          {
          this.props.signup.auth.authStatus.forgotPassword ? <ChangePassword token = {this.props.match.params.emailToken}/> : null
        }
        </div>
        <div>
          {
          this.props.signup.auth.authStatus.retrievePassword ? <ForgotPassword /> : null
        }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginAndSignup);