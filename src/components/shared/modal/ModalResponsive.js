import React from 'react';
import PropTypes from 'prop-types';
import ModalBackdrop from './ModalBackdrop';

function ModalResponsive({ children, onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <div className="z-30 m-auto w-full lg:max-w-2xl h-full lg:max-h-60 overflow-hidden overflow-y-auto p-4 lg:mt-28 bg-white lg:shadow-lg lg:rounded-md">
        {children}
      </div>
    </ModalBackdrop>
  );
}

ModalResponsive.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default ModalResponsive;
