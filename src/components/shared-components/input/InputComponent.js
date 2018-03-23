import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputComponent.scss';
import buildIconAndClassName from './helpers';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);

    const { className, icon } = buildIconAndClassName(props.page, props.icon);
    this.state = {
      style: {
        height: props.height,
        width: props.width,
      },
      className,
      icon,
    };
  }

  render() {
    return (
      <div
        style={this.state.style}
        className={this.state.className}
      >
        {
          this.state.icon &&
          <div className="input-icon">
            {this.state.icon}
          </div>
        }
        <input
          className="input-field"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
          type={this.props.type}
        />
      </div>
    );
  }
}


InputComponent.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  page: PropTypes.oneOf(['login', 'dashboard', 'details']).isRequired,
  type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  placeholder: PropTypes.string
};

InputComponent.defaultProps = {
  height: '40px',
  width: '215px',
  icon: null,
  placeholder: null,
  onKeyPress: () => {}
};
