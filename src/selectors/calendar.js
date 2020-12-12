import { createSelector } from 'reselect';
import { getMonthlyCalendarGrid as getMonthlyCalendarGridHelper } from '../helpers/calendar';

const getMonth = (state) => state.month;

export const getMonthlyCalendarGrid = createSelector([getMonth], (month) => {
  return month !== null
    ? getMonthlyCalendarGridHelper(month).map((date) => {
        return {
          ...date,
          reminders: [],
        };
      })
    : [];
});
