import React from "react";
import PropTypes from "prop-types";

function MonthlyCalendarHeader({ weekDays }) {
  return (
    <div className="w-full flex-shrink p-1 bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-md grid grid-cols-7 gap-1">
      {weekDays.map((weekDay) => (
        <h3
          key={weekDay.short}
          className="px-2 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center flex items-center justify-center"
        >
          <span className="hidden lg:inline">{weekDay.long}</span>
          <span className="hidden md:inline lg:hidden">{weekDay.short}</span>
          <span className="inline md:hidden">{weekDay.narrow}</span>
        </h3>
      ))}
    </div>
  );
}

MonthlyCalendarHeader.propTypes = {
  weekDays: PropTypes.arrayOf(
    PropTypes.shape({
      long: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      narrow: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MonthlyCalendarHeader;
