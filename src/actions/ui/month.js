export const SET_MONTH = 'UI/SET_MONTH';

export function setMonth(month) {
  return {
    type: SET_MONTH,
    payload: month,
  };
}
