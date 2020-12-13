import { select, take } from 'redux-saga/effects';

export function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const stateAfter = yield select();

    console.groupCollapsed('Ran action', action.type);
    console.log({ action, stateAfter });
    console.groupEnd();
  }
}
