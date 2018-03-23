/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.props.toggleTab(this.props.tabIndex);
  }

  render() {
    return (
      <div
        className={`tab ${this.props.isEnabled ? 'active' : 'disabled'}`}
        role='button'
        onClick={this.toggleClick}
      >
        {this.props.tabContent}
      </div>
    );
  }
}

Tab.propTypes = {
  tabContent: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired,
  toggleTab: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired
};

Tab.defaultProps = {
};