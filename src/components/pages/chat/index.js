/*eslint-disable*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { ActionCreators } from '../../../actions';

import chat from './../../../chatdata';

function isEmpty(obj) {
  for (const key in obj) {
    if(obj.hasOwnProperty(key)) { return false; }
  }
  return true;
}


class Chat extends Component {
  constructor(props) {
    super(props);

    const selectedTab = props.match.path.indexOf('signup') > -1 ? 1 : 0;

    this.props = props;
    
    this.state = { chatboard : chat, selectedChat : "" };
   // this.openChat = this.openChat.bind(this);
  }

  /**
   * Access token is stored in local storage
   */
  componentDidUpdate() {
    this.navigateUser();
  }

  navigateUser() {
    // if(!isEmpty(this.props.signup.auth.userInfo)) {
    //   const accessToken = this.props.signup.auth.userInfo.accessToken;
    //   this.props.history.push({pathname: '/' });//eslint-disable-line 
    // }
  }

  componentWillMount(){
    
    // if(this.props.match.params.emailToken != undefined || this.props.match.params.emailToken != null){
    //    this.props.updateForgotPasswordState(this.props.match.params.emailToken);
    // }
    // this.navigateUser();
  }
openChat(selectedChat){
  console.log(selectedChat);
  this.setState({selectedChat : selectedChat});
}


  render() {
    return (
      <div className='chat_history'>
      <div>
          <ul>
          {
                  this.state.chatboard.map((chat, index) => {
                  return (
                    <li onClick={this.openChat.bind(this, chat)}>
                    {chat.requested_by}
                    </li>
                  );
                })
                }
          </ul>
          </div>
          <div>
            <span>{this.state.selectedChat.initial_message}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat);