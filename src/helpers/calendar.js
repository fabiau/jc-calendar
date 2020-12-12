import { DateTime, Info, Interval } from 'luxon';
import { APP_LOCALE } from '../config/locale';

export const DAYS_IN_A_WEEK = 7;
export const MONTH_FORMAT = 'yyyy-MM';
export const DATE_FORMAT = 'yyyy-MM-dd';

const SATURDAY_NUMBER = 7;
const SUNDAY_NUMBER = 1;
const weekendNumbers = Object.freeze([SATURDAY_NUMBER, SUNDAY_NUMBER]);

/**
 * Convert the ISO week number to local week number.
 * That will make the week start from Sunday.
 * @param {number} isoWeekday ISO week number: from `1 - Monday` to `7 - Sunday`.
 */
export function toLocalWeekdayNumber(isoWeekday) {
  return (isoWeekday % DAYS_IN_A_WEEK) + 1;
}

/**
 * Returns long, short, and narrow weekdays descriptions for the current `APP_LOCALE`.
 */
export function getWeekdaysDescriptions() {
  const config = { locale: APP_LOCALE };
  const long = Info.weekdaysFormat('long', config);
  const short = Info.weekdaysFormat('short', config);
  const narrow = Info.weekdaysFormat('narrow', config);

  const weekDays = Array(DAYS_IN_A_WEEK)
    .fill(null)
    .map((_, weekDayIndex) => {
      return {
        long: long[weekDayIndex],
        short: short[weekDayIndex],
        narrow: narrow[weekDayIndex],
      };
    });

  // luxon only return ISO weekdays order,
  // and we want Sunday to be the first day.
  return [
    weekDays[DAYS_IN_A_WEEK - 1],
    ...weekDays.slice(0, DAYS_IN_A_WEEK - 1),
  ];
}

/**
 * Returns an array for the passed date's month with trailing dates for next/previous months.
 * The array represents a calendar that starts on Sunday and ends on Saturday.
 * @param {string} dateString The date (format: `yyyy-MM`) to generate the grid from.
 */
export function getMonthlyCalendarGrid(dateString) {
  const month = DateTime.fromFormat(dateString, MONTH_FORMAT);

  // Get the interval for the provided month
  const monthInterval = Interval.fromDateTimes(
    month.startOf('month'),
    month.endOf('month')
  );

  // Get offsets for trailing months
  const firstWeekOffset = toLocalWeekdayNumber(monthInterval.start.weekday) - 1;
  const lastWeekOffset =
    DAYS_IN_A_WEEK - toLocalWeekdayNumber(monthInterval.end.weekday);

  // Get calendar with trailing intervals
  const calendarInterval = Interval.fromDateTimes(
    monthInterval.start.minus({
      days: firstWeekOffset > 0 ? firstWeekOffset : 0,
    }),
    monthInterval.end.plus({ days: lastWeekOffset })
  );

  // Map the interval to an ordered dates array that represents a calendars month.
  const totalDays = calendarInterval.count('days');
  const start = calendarInterval.start;
  return Array(totalDays)
    .fill(null)
    .map((_, startOffset) => {
      const date = start.plus({ days: startOffset });
      return {
        key: date.toFormat(DATE_FORMAT),
        text: date.toLocaleString({ locale: APP_LOCALE, day: 'numeric' }),
        trailing: !month.hasSame(date, 'month'),
        isWeekend: weekendNumbers.includes(toLocalWeekdayNumber(date.weekday)),
      };
    });
}

/**
 * Returns a localized formatted month and year string.
 * @param {string} monthString The month to get the key from.
 */
export function getDisplayMonthAndYear(monthString) {
  return DateTime.fromFormat(monthString, MONTH_FORMAT).toLocaleString({
    locale: APP_LOCALE,
    year: 'numeric',
    month: 'long',
  });
}
