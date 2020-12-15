import { call, debounce, put, race, take } from 'redux-saga/effects';
import * as forecastUIActions from '../../actions/ui/forecast';
import * as forecastApi from '../../infra/api/forecast';

export function* getForecast(action) {
  const { result, cancel } = yield race({
    result: call(
      forecastApi.getCityForecastForDate,
      action.payload.city,
      action.payload.date
    ),
    cancel: take(forecastUIActions.RESET_FORECAST),
  });

  if (!cancel) {
    yield put(forecastUIActions.setForecast(result));
  }
}

export function* watchGetForecast() {
  yield debounce(1000, forecastUIActions.GET_FORECAST, getForecast);
}
