import { SET_FORECAST } from '../../actions/ui/forecast';

export default function forecast(state = null, action) {
  switch (action.type) {
    case SET_FORECAST:
      return action.payload;

    default:
      return state;
  }
}
