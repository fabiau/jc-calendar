import { DateTime } from 'luxon';
import { createSelector } from 'reselect';

export const getReminder = (state) => state.ui.reminder;

export const getFormattedReminder = createSelector(
  [getReminder],
  (reminder) => {
    if (!reminder) return null;

    return {
      id: reminder.id,
      description: reminder.description ?? '',
      color: reminder.color, // TODO: Color.fromString
      dateTime: DateTime.fromMillis(reminder.dateTime),
      cityName: reminder.cityName,
    };
  }
);
