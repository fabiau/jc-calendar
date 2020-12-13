import React from 'react';
import PropTypes from 'prop-types';

const CheckIcon = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={props.svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

CheckIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default CheckIcon;
