import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/no-static-element-interactions */
const BodyRowComponent = ({ children, styles, rowClassName, onClick, rowData }) => { // eslint-disable-line object-curly-newline
  const styleConfig = Object.assign({}, BodyRowComponent.defaultProps.styles, styles);
  const rowClasses = 'tbl-body-row' + (rowClassName ? ' ' + rowClassName : '');

  const onRowClick = () => {
    if(onClick) {
      onClick(rowData, rowClassName);
    }
  };

  if(onClick) {
    return (
      <div style={styleConfig} className={rowClasses} onClick={onRowClick} onKeyPress={onClick}>
        {children}
      </div>
    );
  }

  return (
    <div style={styleConfig} className={rowClasses}>
      {children}
    </div>
  );
};

BodyRowComponent.propTypes = {
  children: PropTypes.node,
  rowClassName: PropTypes.string,
  styles: PropTypes.shape({}),
  onClick: PropTypes.func,
  rowData: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.node])
};

BodyRowComponent.defaultProps = {
  children: [],
  rowClassName: '',
  styles: {},
  onClick: null,
  rowData: {}
};

BodyRowComponent.displayName = 'BodyRowComponent';

export default BodyRowComponent;