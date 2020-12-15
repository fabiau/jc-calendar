import { ErrorMessage, Form } from 'formik';
import React from 'react';
import { DEFAULT_COLOR } from '../../helpers/colors';
import { mount, shallow } from '../../test-utils';
import BaseButton from '../shared/buttons/BaseButton';
import FormErrorMessage from '../shared/forms/FormErrorMessage';
import FormFieldset from '../shared/forms/FormFieldset';
import ReminderForm from './ReminderForm';

describe('components::reminders::ReminderForm', () => {
  const inputByNameSelector = (name) => `input[name="${name}"]`;

  test('populates initial values from props', () => {
    const reminder = {
      id: null,
      description: 'Lorem Ipsum',
      color: DEFAULT_COLOR,
      date: '2020-12-12',
      time: '13:45',
      city: '',
    };

    const wrapper = mount(
      <ReminderForm reminder={{ ...reminder }} onSubmit={jest.fn()} />
    );

    const validateInputField = (name) => {
      expect(wrapper.exists(inputByNameSelector(name))).toBe(true);
      expect(wrapper.find(inputByNameSelector(name)).prop('value')).toEqual(
        reminder[name]
      );
    };

    validateInputField('description');
    validateInputField('date');
    validateInputField('time');
    validateInputField('city');
  });
});
