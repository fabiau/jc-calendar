import React from 'react';
import PropTypes from 'prop-types';

const ChevronsDownIcon = (props) => {
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
          d="M7 13L12 18L17 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6L12 11L17 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

ChevronsDownIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default ChevronsDownIcon;
