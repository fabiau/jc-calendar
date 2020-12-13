import { combineReducers } from 'redux';
import month from './month';
import reminder from './reminder';

export default combineReducers({
  month,
  reminder,
});
