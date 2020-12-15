import React from 'react';
import PropTypes from 'prop-types';
import ReminderColorCircle from './ReminderColorCircle';

function ReminderColorPickerItem({ colorName, onClick }) {
  return (
    <li
      tabIndex="0"
      id="listbox-item-0"
      role="option"
      aria-selected={false}
      className="cursor-pointer select-none relative p-2 transition duration-200 hover:bg-indigo-100"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <ReminderColorCircle colorName={colorName} />
      </div>
    </li>
  );
}

ReminderColorPickerItem.propTypes = {
  colorName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReminderColorPickerItem;
