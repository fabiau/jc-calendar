import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePropType, DateReminderPropType } from '../shared/prop-types/date';
import { getFormattedDateReminders } from '../../selectors/ui/calendar';
import { editReminder } from '../../actions/ui/reminder';
import MonthlyCalendarDateReminder from './MonthlyCalendarDateReminder';

function MonthlyCalendarDate({ date, reminders, editReminder }) {
  return (
    <li
      key={date.key}
      className={classNames(
        'h-auto px-3 py-2 bg-white text-lg overflow-hidden',
        {
          'font-normal': !date.isWeekend,
          'text-indigo-600 font-bold': date.isWeekend && !date.trailing,
          'text-gray-400': date.trailing,
        }
      )}
    >
      {date.text}

      <ol>
        {reminders.map((reminder) => (
          <MonthlyCalendarDateReminder
            key={reminder.id}
            reminder={reminder}
            onClick={() => editReminder(reminder)}
          />
        ))}
      </ol>
    </li>
  );
}

MonthlyCalendarDate.propTypes = {
  date: DatePropType.isRequired,
  reminders: PropTypes.arrayOf(DateReminderPropType.isRequired).isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    reminders: getFormattedDateReminders(state, { dateId: ownProps.date.key }),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editReminder }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyCalendarDate);
