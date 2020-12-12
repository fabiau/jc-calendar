import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={props.svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M12 5.5V19.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12.5H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

PlusIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default PlusIcon;
