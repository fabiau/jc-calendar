import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MonthlyCalendarGrid({ dates }) {
  return (
    <ol className="w-full flex-grow overflow-y-auto px-1 pt-0 pb-1 bg-gray-200 grid grid-cols-7 gap-1">
      {dates.map((date) => {
        return (
          <li
            key={date.key}
            className={classNames('h-auto px-3 py-2 bg-white text-lg', {
              'font-normal': !date.isWeekend,
              'text-indigo-600 font-bold': date.isWeekend && !date.trailing,
              'text-gray-400': date.trailing,
            })}
          >
            {date.text}
          </li>
        );
      })}
    </ol>
  );
}

MonthlyCalendarGrid.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      trailing: PropTypes.bool.isRequired,
      isWeekend: PropTypes.bool.isRequired,
      reminders: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    })
  ).isRequired,
};

export default MonthlyCalendarGrid;
