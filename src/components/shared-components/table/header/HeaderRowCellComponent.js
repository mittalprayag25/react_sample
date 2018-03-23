import React from 'react';
import PropTypes from 'prop-types';

const HeaderRowCellComponent = ({ children, styles, onClick }) => {
  const styleConfig = Object.assign({}, HeaderRowCellComponent.defaultProps.styles, styles);
  const onHeaderCellClicked = () => {
    if(onClick) {
      onClick();
    }
  };

  if(onClick) {
    return ( // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div style={styleConfig} className="tbl-header-row-cell" onClick={onHeaderCellClicked} onKeyPress={onHeaderCellClicked}>
        {children}
      </div>
    );
  }

  return (
    <div style={styleConfig} className="tbl-header-row-cell">
      {children}
    </div>
  );
};

HeaderRowCellComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({}),
  onClick: PropTypes.func
};

HeaderRowCellComponent.defaultProps = {
  children: [],
  styles: {},
  onClick: null
};

HeaderRowCellComponent.displayName = 'HeaderRowCellComponent';

export default HeaderRowCellComponent;