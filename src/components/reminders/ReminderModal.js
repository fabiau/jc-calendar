import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ModalHeader from '../shared/modal/ModalHeader';
import ModalResponsive from '../shared/modal/ModalResponsive';

class ReminderModal extends Component {
  render() {
    const { reminder, onClose } = this.props;
    const isNew = !Boolean(reminder.id);

    return (
      <ModalResponsive onClose={onClose}>
        <ModalHeader onClose={onClose}>
          <h2 className="uppercase font-medium text-xl">
            {isNew ? 'New' : 'Edit'} Reminder
          </h2>
        </ModalHeader>
      </ModalResponsive>
    );
  }
}

ReminderModal.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['']).isRequired, // TODO: Add colors definitions
    dateTime: PropTypes.instanceOf(DateTime).isRequired,
    cityName: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReminderModal;
