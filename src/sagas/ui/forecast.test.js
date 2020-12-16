import { raceWithResetForecast, getForecast } from './forecast';
import * as forecastUIActions from '../../actions/ui/forecast';
import * as forecastApi from '../../infra/api/forecast';
import { call, put } from 'redux-saga/effects';

describe('sagas::ui::forecast', () => {
  test('getForecast', () => {
    const iterator = getForecast(
      forecastUIActions.getForecast({
        city: 'Lorem Ipsum',
        date: '2020-12-12',
      })
    );

    expect(iterator.next().value).toEqual(
      raceWithResetForecast(
        call(forecastApi.getCityForecastForDate, 'Lorem Ipsum', '2020-12-12')
      )
    );

    expect(
      iterator.next({
        result: {
          errorMessage: null,
          forecast: null,
        },
        reset: undefined,
      }).value
    ).toEqual(
      put(
        forecastUIActions.setForecast({
          errorMessage: null,
          forecast: null,
        })
      )
    );
  });
});
