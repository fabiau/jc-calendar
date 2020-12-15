import React from 'react';
import PropTypes from 'prop-types';

const ChevronsUpIcon = (props) => {
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
          d="M17 11.5L12 6.5L7 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 18.5L12 13.5L7 18.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
};

ChevronsUpIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default ChevronsUpIcon;
