import React from 'react';
import { getWeekdaysDescriptions } from '../../helpers/calendar';
import MonthlyCalendarHeader from './MonthlyCalendarHeader';
import MonthlyCalendarGrid from './MonthlyCalendarGrid';
import { connect } from 'react-redux';
import { getMonthlyCalendarGrid } from '../../selectors/calendar';

// As the user can't change the locale, keep this 'cached'.
const weekDays = getWeekdaysDescriptions();

function MonthlyCalendar({ dates }) {
  return (
    <div className="w-full flex-grow overflow-hidden flex flex-col">
      <MonthlyCalendarHeader weekDays={weekDays} />
      <MonthlyCalendarGrid dates={dates} />
    </div>
  );
}

function mapStateToProps(state, props) {
  const dates = getMonthlyCalendarGrid(state);

  return {
    ...props,
    dates,
  };
}

export default connect(mapStateToProps)(MonthlyCalendar);
