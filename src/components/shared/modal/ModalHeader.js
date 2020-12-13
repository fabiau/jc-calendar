import React from 'react';
import PropTypes from 'prop-types';
import XIcon from '../../icons/XIcon';

function ModalHeader({ children, onClose }) {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between">
      <div className="truncate">{children}</div>
      <button type="button" className="p-1" onClick={onClose}>
        <XIcon svgClassName="w-6 h-6" />
      </button>
    </div>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
