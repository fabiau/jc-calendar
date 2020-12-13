import { DateTime } from 'luxon';
import { createSelector } from 'reselect';
import { millisToDateTimeStrings } from '../../helpers/calendar';

export const getReminder = (state) => state.ui.reminder;

export const getFormattedReminder = createSelector(
  [getReminder],
  (reminder) => {
    if (!reminder) return null;

    return {
      id: reminder.id,
      description: reminder.description,
      color: reminder.color,
      cityName: reminder.cityName,
      ...millisToDateTimeStrings(reminder.dateTime),
    };
  }
);
