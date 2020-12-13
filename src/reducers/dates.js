import { SET_DATE_REMINDER } from '../actions/dates';

export default function reminders(state = {}, action) {
  switch (action.type) {
    case SET_DATE_REMINDER:
      const entry = state[action.payload.date] ?? {
        id: action.payload.date,
        reminders: [],
      };

      return {
        ...state,
        [entry.id]: {
          ...entry,
          reminders: [...entry.reminders, action.payload.reminderId],
        },
      };

    default:
      return state;
  }
}
