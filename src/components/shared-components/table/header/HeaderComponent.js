import React from 'react';
import PropTypes from 'prop-types';
import './HeaderComponent.scss';

const HeaderComponent = ({ children, styles }) => {
  const styleConfig = Object.assign({}, HeaderComponent.defaultProps.styles, styles);
  return (
    <div style={styleConfig} className="tbl-header">
      {children}
    </div>
  );
};

HeaderComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    height: PropTypes.string
  })
};

HeaderComponent.defaultProps = {
  children: [],
  styles: {
    height: '40px'
  }
};

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;