import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeReminder } from '../../actions/ui/reminder';
import { getFormattedReminder } from '../../selectors/ui/reminder';
import ReminderModal from './ReminderModal';

function ReminderContainer({ reminder, closeReminder }) {
  if (!reminder) return null;

  return <ReminderModal reminder={reminder} onClose={closeReminder} />;
}

function mapStateToProps(state) {
  return {
    reminder: getFormattedReminder(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeReminder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
