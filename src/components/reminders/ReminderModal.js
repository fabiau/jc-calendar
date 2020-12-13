import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ModalHeader from '../shared/modal/ModalHeader';
import ModalResponsive from '../shared/modal/ModalResponsive';
import ReminderForm from './ReminderForm';
import { ALL_COLORS } from '../../helpers/colors';

class ReminderModal extends Component {
  render() {
    const { reminder, onClose } = this.props;
    const isNew = !Boolean(reminder.id);

    return (
      <ModalResponsive onClose={onClose}>
        <div className="w-full h-full overflow-y-auto p-8 flex flex-col gap-8">
          <ModalHeader onClose={onClose}>
            <h2 className="uppercase font-medium text-xl">
              {isNew ? 'New' : 'Edit'} Reminder
            </h2>
          </ModalHeader>

          <ReminderForm reminder={reminder} />
        </div>
      </ModalResponsive>
    );
  }
}

ReminderModal.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOf(ALL_COLORS).isRequired, // TODO: Add colors definitions
    dateTime: PropTypes.instanceOf(DateTime).isRequired,
    cityName: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};

export default ReminderModal;
