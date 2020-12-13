export const SET_DATE_REMINDER = 'ADD_DATE_REMINDER';

export function setDateReminder({ date, reminderId }) {
  return {
    type: SET_DATE_REMINDER,
    payload: {
      date,
      reminderId,
    },
  };
}
