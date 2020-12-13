import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getBackgroundColor } from '../../helpers/colors';

function ReminderColorCircle({ colorName }) {
  return (
    <div
      className={classNames(
        'w-6 h-6 rounded-full',
        getBackgroundColor(colorName)
      )}
    >
      <span className="sr-only">Color: {colorName}</span>
    </div>
  );
}

ReminderColorCircle.propTypes = {
  colorName: PropTypes.string.isRequired,
};

export default ReminderColorCircle;
