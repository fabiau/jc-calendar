import React from 'react';
import PropTypes from 'prop-types';

function FormActions({ children }) {
  return (
    <div className="mt-4 flex flex-row flex-wrap items-center justify-end">
      {children}
    </div>
  );
}

FormActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormActions;
