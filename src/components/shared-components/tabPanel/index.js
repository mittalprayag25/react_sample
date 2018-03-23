import React from 'react';
import PropTypes from 'prop-types';


const tabPanelComponent = ({ component }) => {
  return (<div className='tab-panel'>{ component }</div>);
};

tabPanelComponent.propTypes = {
  component: PropTypes.element.isRequired,
};

export default tabPanelComponent;