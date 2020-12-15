import {
  getForecast,
  GET_FORECAST,
  resetForecast,
  RESET_FORECAST,
  setForecast,
  SET_FORECAST,
} from './forecast';

describe('actions::ui::forecast', () => {
  test('getForecast', () => {
    const action = getForecast({ city: 'Lorem Ipsum', date: '2020-12-12' });

    expect(action).toEqual({
      type: GET_FORECAST,
      payload: { city: 'Lorem Ipsum', date: '2020-12-12' },
    });
  });

  test('setForecast', () => {
    let action = setForecast({
      errorMessage: null,
      forecast: {
        avgTemp: 66.9,
        maxTemp: 73,
        minTemp: 63.5,
        condition: {
          code: '1189',
          icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
          text: 'Moderate rain',
        },
      },
    });

    expect(action).toEqual({
      type: SET_FORECAST,
      payload: {
        errorMessage: null,
        forecast: {
          avgTemp: 66.9,
          maxTemp: 73,
          minTemp: 63.5,
          condition: {
            code: '1189',
            icon: '//cdn.weatherapi.com/weather/64x64/day/302.png',
            text: 'Moderate rain',
          },
        },
      },
    });

    action = setForecast({
      errorMessage: null,
      forecast: null,
    });

    expect(action).toEqual({
      type: SET_FORECAST,
      payload: {
        errorMessage: null,
        forecast: null,
      },
    });
  });

  test('resetForecast', () => {
    const action = resetForecast();

    expect(action).toEqual({
      type: RESET_FORECAST,
    });
  });
});
