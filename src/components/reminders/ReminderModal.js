import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ModalHeader from '../shared/modal/ModalHeader';
import ModalResponsive from '../shared/modal/ModalResponsive';
import ReminderForm from './ReminderForm';
import { ALL_COLORS } from '../../helpers/colors';
import { ReminderPropType } from '../shared/prop-types/reminder';

class ReminderModal extends Component {
  render() {
    const { reminder, onClose, onSubmit } = this.props;
    const isNew = !Boolean(reminder.id);

    return (
      <ModalResponsive onClose={onClose}>
        <div className="w-full h-full overflow-y-auto p-8 flex flex-col gap-8">
          <ModalHeader onClose={onClose}>
            <h2 className="uppercase font-medium text-xl">
              {isNew ? 'New' : 'Edit'} Reminder
            </h2>
          </ModalHeader>

          <ReminderForm reminder={reminder} onSubmit={onSubmit} />
        </div>
      </ModalResponsive>
    );
  }
}

ReminderModal.propTypes = {
  reminder: ReminderPropType.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReminderModal;
