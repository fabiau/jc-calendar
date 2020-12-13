import React, { Component } from 'react';
import ModalHeader from '../shared/modal/ModalHeader';
import ModalResponsive from '../shared/modal/ModalResponsive';

class ReminderModal extends Component {
  handleClose = () => {
    console.log('Close modal...');
  };

  render() {
    return (
      <ModalResponsive onClose={this.handleClose}>
        <ModalHeader onClose={this.handleClose}>
          <h2 className="uppercase font-medium text-xl">New Reminder</h2>
        </ModalHeader>
      </ModalResponsive>
    );
  }
}

export default ReminderModal;
