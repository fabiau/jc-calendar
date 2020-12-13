import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function BaseButton({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={classNames(
        'uppercase w-full sm:w-auto flex flex-row flex-nowrap items-center justify-center gap-2 px-4 py-2 shadow rounded text-lg font-medium transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BaseButton;
