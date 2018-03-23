import React from 'react';
import PropTypes from 'prop-types';

const HeaderRowComponent = ({ children, styles }) => {
  const styleConfig = Object.assign({}, HeaderRowComponent.defaultProps.styles, styles);
  return (
    <div style={styleConfig} className="tbl-header-row">
      {children}
    </div>
  );
};

HeaderRowComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({})
};

HeaderRowComponent.defaultProps = {
  children: [],
  styles: {}
};

HeaderRowComponent.displayName = 'HeaderRowComponent';

export default HeaderRowComponent;