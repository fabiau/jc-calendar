import { SET_DATE_REMINDER } from '../actions/dates';

function filterDateReminders(dates, reminderIdToExclude) {
  return Object.values(dates).reduce((filtered, existing) => {
    return {
      ...filtered,
      [existing.id]: {
        ...existing,
        reminders: existing.reminders.filter(
          (reminderId) => reminderId !== reminderIdToExclude
        ),
      },
    };
  }, {});
}

export default function reminders(state = {}, action) {
  switch (action.type) {
    case SET_DATE_REMINDER:
      const entry = state[action.payload.date] ?? {
        id: action.payload.date,
        reminders: [],
      };

      return {
        ...filterDateReminders(state, action.payload.reminderId),
        [entry.id]: {
          ...entry,
          reminders: Array.from(
            new Set([...entry.reminders, action.payload.reminderId])
          ),
        },
      };

    default:
      return state;
  }
}
