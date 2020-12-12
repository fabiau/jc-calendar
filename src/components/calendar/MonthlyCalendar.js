import { DateTime } from 'luxon';
import React from 'react';
import { getWeekdaysDescriptions } from '../../helpers/calendar';
import MonthlyCalendarHeader from './MonthlyCalendarHeader';

// As the user can't change the locale, keep this 'cached'.
const weekDays = getWeekdaysDescriptions();

function MonthlyCalendar() {
  return (
    <div className="h-full w-full">
      <MonthlyCalendarHeader weekDays={weekDays} />
    </div>
  );
}

export default MonthlyCalendar;
