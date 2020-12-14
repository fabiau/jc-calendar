import { takeEvery } from 'redux-saga/effects';
import * as forecastUIActions from '../../actions/ui/forecast';

export function* getForecast() {}

export function* watchGetForecast() {
  yield takeEvery(forecastUIActions.GET_FORECAST, getForecast);
}
