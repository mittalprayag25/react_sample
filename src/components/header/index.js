import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './../../actions';
import './assets/header.scss';
import Search from './components/search';


/*eslint-disable jsx-a11y/anchor-is-valid */
const renderLink = (navLink, isUserLoggedIn) => {
  let link = <li className="item" key={navLink.index}> <Link to={navLink.link}> <b> {navLink.name}</b></Link> </li>;
  if(navLink.isAuthRequired && !isUserLoggedIn) {
    link = '';
  }
  return link;
};


class Header extends Component {
  constructor(props) {
    super(props);

    //isUserLoggedIn will come from store 
    this.state = {
      isUserLoggedIn: true
    };

    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(){
    
    if(this.props.state.auth.userInfo){
      this.props.history.push({pathname: '/login' });//eslint-disable-line 
    }
  }
  
  logout(){
    this.props.logout();
  }
  render() {
    return (
      <div className="header">
        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state: { ...state }
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
