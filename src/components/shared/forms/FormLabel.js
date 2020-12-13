import React from 'react';
import PropTypes from 'prop-types';

function FormLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block font-medium text-gray-700 ">
      {children}
    </label>
  );
}

FormLabel.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default FormLabel;
