import React from 'react';
import PropTypes from 'prop-types';
import './BodyComponent.scss';

const BodyComponent = ({ children, styles }) => {
  const styleConfig = Object.assign({}, BodyComponent.defaultProps.styles, styles);
  return (
    <div style={styleConfig} className="tbl-body">
      {children}
    </div>
  );
};

BodyComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({})
};

BodyComponent.defaultProps = {
  children: [],
  styles: {}
};

BodyComponent.displayName = 'BodyComponent';

export default BodyComponent;