import React from 'react';
import PropTypes from 'prop-types';

function FormFieldset({ children }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

FormFieldset.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormFieldset;
