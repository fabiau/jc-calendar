import React from 'react';
import PropTypes from 'prop-types';
import { DatePropType } from '../shared/prop-types/date';
import MonthlyCalendarDate from './MonthlyCalendarDate';

function MonthlyCalendarGrid({ dates }) {
  return (
    <ol className="w-full flex-grow overflow-y-auto px-1 pt-0 pb-1 bg-gray-200 grid grid-cols-7 auto-rows-fr gap-1">
      {dates.map((date) => (
        <MonthlyCalendarDate key={date.key} date={date} />
      ))}
    </ol>
  );
}

MonthlyCalendarGrid.propTypes = {
  dates: PropTypes.arrayOf(DatePropType.isRequired).isRequired,
};

export default MonthlyCalendarGrid;
