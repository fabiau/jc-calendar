import { call, cancel, delay, fork, put, race, take } from 'redux-saga/effects';
import * as forecastUIActions from '../../actions/ui/forecast';
import * as forecastApi from '../../infra/api/forecast';

export function* raceWithResetForecast(effect) {
  return yield race({
    result: effect,
    reset: take(forecastUIActions.RESET_FORECAST),
  });
}

export function* getForecast(action) {
  const { result, reset } = yield raceWithResetForecast(
    call(
      forecastApi.getCityForecastForDate,
      action.payload.city,
      action.payload.date
    )
  );
  if (!reset) {
    yield put(forecastUIActions.setForecast(result));
  }
}

export function* getForecastDebounced(action) {
  const { reset } = yield raceWithResetForecast(delay(1000));
  if (!reset) {
    yield getForecast(action);
  }
}

export function* watchGetForecast() {
  let task;
  while (true) {
    const action = yield take(forecastUIActions.GET_FORECAST);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(getForecastDebounced, action);
  }
}
