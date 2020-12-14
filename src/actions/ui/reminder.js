export const NEW_REMINDER = 'UI/NEW_REMINDER';
export const EDIT_REMINDER = 'UI/EDIT_REMINDER';
export const SUBMIT_REMINDER = 'UI/SUBMIT_REMINDER';

export const OPEN_REMINDER = 'UI/OPEN_REMINDER';
export const CLOSE_REMINDER = 'UI/CLOSE_REMINDER';

export function newReminder() {
  return {
    type: NEW_REMINDER,
  };
}

export function editReminder(reminder) {
  return {
    type: EDIT_REMINDER,
    payload: reminder,
  };
}

export function submitReminder(reminder) {
  return {
    type: SUBMIT_REMINDER,
    payload: reminder,
  };
}

export function openReminder(reminder) {
  return {
    type: OPEN_REMINDER,
    payload: reminder,
  };
}

export function closeReminder() {
  return {
    type: CLOSE_REMINDER,
  };
}
