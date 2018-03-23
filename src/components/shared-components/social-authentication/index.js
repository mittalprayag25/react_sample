import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../actions';

import './assets/social-authentication.scss';


class SocialAuthentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isVerified: false, isActive: false };//eslint-disable-line 
  }

  render() {
    return (
      <div className="social-box">
        <button className='social-button-facebook'>Facebook</button>
        <button className='social-button-google'>Google</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SocialAuthentication);