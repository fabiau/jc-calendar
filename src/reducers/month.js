import { SET_MONTH } from '../actions/month';

export default function month(state = null, action) {
  switch (action.type) {
    case SET_MONTH:
      return action.payload;

    default:
      return state;
  }
}
