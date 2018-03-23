import React from 'react';
import PropTypes from 'prop-types';

const BodyRowCellComponent = ({ children, styles }) => {
  const styleConfig = Object.assign({}, BodyRowCellComponent.defaultProps.styles, styles);
  return (
    <div style={styleConfig} className="tbl-body-row-cell">
      {children}
    </div>
  );
};

BodyRowCellComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({})
};

BodyRowCellComponent.defaultProps = {
  children: [],
  styles: {}
};

BodyRowCellComponent.displayName = 'BodyRowCellComponent';

export default BodyRowCellComponent;