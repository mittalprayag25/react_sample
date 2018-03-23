import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = ({ isOpen, ModalContent }) => {
  return (
    <div style={{ display: `${isOpen ? 'block' : 'none'}` }} className='backdrop'>
      <div className='box'>
        {ModalContent}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  ModalContent: PropTypes.element.isRequired
};

export default Modal;
