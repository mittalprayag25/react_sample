import React from 'react';
import PropTypes from 'prop-types';
import './details-page.scss';


const DetailPage = ({ heading, detailComponent, headerImage }) => {
  return (
    <div>
      <div className="title-container" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1 className="page-title"><span>{heading}</span></h1>
      </div>
      <div className="main-panel">
        {detailComponent}
      </div>
    </div>
  );
};


DetailPage.propTypes = {
  heading: PropTypes.string.isRequired,
  detailComponent: PropTypes.element.isRequired,
  headerImage: PropTypes.string.isRequired
};

export default DetailPage;
