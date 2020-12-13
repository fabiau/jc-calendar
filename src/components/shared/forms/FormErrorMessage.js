import React from 'react';
import PropTypes from 'prop-types';

function FormErrorMessage({ children }) {
  return (
    <div className="text-xs sm:text-sm block text-red-500">{children}</div>
  );
}

FormErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormErrorMessage;
