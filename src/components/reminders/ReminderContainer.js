import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeReminder, submitReminder } from '../../actions/ui/reminder';
import { getFormattedReminder } from '../../selectors/ui/reminder';
import ReminderModal from './ReminderModal';

function ReminderContainer({ reminder, closeReminder, submitReminder }) {
  if (!reminder) return null;

  return (
    <ReminderModal
      reminder={reminder}
      onClose={closeReminder}
      onSubmit={submitReminder}
    />
  );
}

function mapStateToProps(state) {
  return {
    reminder: getFormattedReminder(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeReminder, submitReminder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
