export const SET_MONTH = 'SET_MONTH';

export function setMonth(month) {
  return {
    type: SET_MONTH,
    payload: month,
  };
}
