import React from 'react';
import classNames from 'classnames';
import { DateReminderPropType } from '../shared/prop-types/date';
import { getBackgroundColor, getTextColor } from '../../helpers/colors';

function MonthlyCalendarDateReminder({ reminder }) {
  return (
    <li
      tabIndex={0}
      className={classNames(
        'py-px hover:bg-gray-200 text-gray-900 rounded cursor-pointer text-xs font-normal truncate flex flex-row flex-nowrap items-center gap-2',
        `hover:${getTextColor(reminder.color)}`
      )}
    >
      <div
        className={classNames(
          'w-2 h-2 rounded-full flex-shrink-0',
          getBackgroundColor(reminder.color)
        )}
      />
      {reminder.displayTime} - {reminder.description}
    </li>
  );
}

MonthlyCalendarDateReminder.propTypes = {
  reminder: DateReminderPropType.isRequired,
};

export default MonthlyCalendarDateReminder;
