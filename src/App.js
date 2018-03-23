import React, { Component } from 'react';
import { Route } from 'react-router-dom';//eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes';

import './assets/app.scss';
import chat from './chatdata';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className='App'>
        <div className='page-header'>
          <Header />
        </div>
        <div className='page'>
          <AppRoutes />
        </div>
        <div className='page-footer'>
          <Footer />
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
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
