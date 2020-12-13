import { apply, call, put, takeEvery } from 'redux-saga/effects';
import { setDateReminder } from '../actions/dates';
import { setReminder } from '../actions/reminders';
import * as reminderUIActions from '../actions/ui/reminder';
import { dateTimeStringsToMillis } from '../helpers/calendar';
import { DEFAULT_COLOR } from '../helpers/colors';
import { generateUUID } from '../helpers/uuid';

export function* openReminder(reminder) {
  yield put(reminderUIActions.openReminder(reminder));
}

export function* newReminder() {
  const initialDateTime = yield apply(Date, 'now');
  const initialColor = DEFAULT_COLOR;

  const reminder = {
    id: null,
    description: '',
    color: initialColor,
    dateTime: initialDateTime,
    cityName: '',
  };

  yield call(openReminder, reminder);
}

export function* submitReminder(action) {
  const reminder = action.payload;
  let id = reminder.id;
  if (!id) {
    // It is a new reminder, create an id for it since we don't have a backend.
    id = generateUUID();
  }

  const reminderToSet = {
    id,
    description: reminder.description,
    color: reminder.color,
    dateTime: dateTimeStringsToMillis(reminder.date, reminder.time),
    cityName: reminder.cityName,
  };

  const dateReminder = { date: reminder.date, reminderId: reminderToSet.id };

  // TODO: Save do IDB (with dexie)

  yield put(setReminder(reminderToSet));
  yield put(setDateReminder(dateReminder));

  yield put(reminderUIActions.closeReminder());
}

export function* watchNewReminder() {
  yield takeEvery(reminderUIActions.NEW_REMINDER, newReminder);
}

export function* watchSubmitReminder() {
  yield takeEvery(reminderUIActions.SUBMIT_REMINDER, submitReminder);
}
