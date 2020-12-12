import React from 'react';
import PropTypes from 'prop-types';

function MonthlyCalendarGrid({ dates }) {
  return (
    <ol className="w-full flex-grow overflow-y-auto px-1 pt-0 pb-1 bg-gray-200 grid grid-cols-7 gap-1">
      {dates.map((date) => {
        return (
          <li key={date} className="h-auto p-1 bg-white">
            {date}
          </li>
        );
      })}
    </ol>
  );
}

MonthlyCalendarGrid.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default MonthlyCalendarGrid;
