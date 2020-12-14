import { createSelector } from 'reselect';
import {
  getDisplayTimeFromMillis,
  getMonthlyCalendarGrid as getMonthlyCalendarGridHelper,
} from '../../helpers/calendar';
import { getDateReminders } from '../dates';
import { getReminders } from '../reminders';
import { getMonth } from './month';

export const getMonthlyCalendarGrid = createSelector([getMonth], (month) => {
  return month !== null ? getMonthlyCalendarGridHelper(month) : [];
});

export const getFormattedDateReminders = createSelector(
  [getDateReminders, getReminders],
  (dateReminders, reminders) => {
    if (!dateReminders || !reminders) return [];

    return dateReminders
      .reduce((formatted, reminderId) => {
        const reminder = reminders[reminderId];
        return reminder
          ? [
              ...formatted,
              {
                ...reminder,
                displayTime: getDisplayTimeFromMillis(reminder.dateTime),
              },
            ]
          : formatted;
      }, [])
      .sort((a, b) => a.dateTime - b.dateTime);
  }
);
