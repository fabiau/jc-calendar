import { RESET_FORECAST, SET_FORECAST } from '../../actions/ui/forecast';

export default function forecast(
  state = { errorMessage: null, forecast: null },
  action
) {
  switch (action.type) {
    case SET_FORECAST:
      return action.payload;

    case RESET_FORECAST:
      return { errorMessage: null, forecast: null };

    default:
      return state;
  }
}
