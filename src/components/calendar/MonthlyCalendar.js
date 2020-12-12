import React from 'react';
import { DateTime } from 'luxon';
import {
  getMonthlyCalendarGrid,
  getWeekdaysDescriptions,
  MONTH_FORMAT,
} from '../../helpers/calendar';
import MonthlyCalendarHeader from './MonthlyCalendarHeader';
import MonthlyCalendarGrid from './MonthlyCalendarGrid';

// As the user can't change the locale, keep this 'cached'.
const weekDays = getWeekdaysDescriptions();

function MonthlyCalendar() {
  const today = DateTime.local();
  const dates = getMonthlyCalendarGrid(today.toFormat(MONTH_FORMAT));

  return (
    <div className="w-full flex-grow overflow-hidden flex flex-col">
      <MonthlyCalendarHeader weekDays={weekDays} />
      <MonthlyCalendarGrid dates={dates} />
    </div>
  );
}

export default MonthlyCalendar;
