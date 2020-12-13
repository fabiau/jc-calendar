import { OPEN_REMINDER, CLOSE_REMINDER } from '../../actions/ui/reminder';

export default function reminder(state = null, action) {
  switch (action.type) {
    case OPEN_REMINDER:
      return action.payload;

    case CLOSE_REMINDER:
      return null;

    default:
      return state;
  }
}
