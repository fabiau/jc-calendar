import { SET_REMINDER } from '../actions/reminders';

export default function reminders(state = {}, action) {
  switch (action.type) {
    case SET_REMINDER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
