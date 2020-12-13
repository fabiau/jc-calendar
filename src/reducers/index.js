import { combineReducers } from 'redux';
import ui from './ui';
import dates from './dates';
import reminders from './reminders';

export default combineReducers({
  ui,
  dates,
  reminders,
});
