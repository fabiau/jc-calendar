export const SET_REMINDER = 'SET_REMINDER';

export function setReminder(reminder) {
  return {
    type: SET_REMINDER,
    payload: reminder,
  };
}
