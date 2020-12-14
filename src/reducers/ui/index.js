import { combineReducers } from 'redux';
import month from './month';
import reminder from './reminder';
import forecast from './forecast';

export default combineReducers({
  month,
  reminder,
  forecast,
});
