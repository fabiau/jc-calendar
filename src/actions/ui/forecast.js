export const GET_FORECAST = 'UI/GET_FORECAST';
export const SET_FORECAST = 'UI/SET_FORECAST';
export const RESET_FORECAST = 'UI/RESET_FORECAST';

export function getForecast({ city, date }) {
  return {
    type: GET_FORECAST,
    payload: { city, date },
  };
}

export function setForecast(forecast) {
  return {
    type: SET_FORECAST,
    payload: forecast,
  };
}

export function resetForecast() {
  return {
    type: RESET_FORECAST,
  };
}
