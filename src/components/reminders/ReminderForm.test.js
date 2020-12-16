import React from 'react';
import { act } from 'react-dom/test-utils';
import { DEFAULT_COLOR } from '../../helpers/colors';
import { mount } from '../../test-utils';
import ReminderForm from './ReminderForm';

// Helper function - uses act() under the hood from react-dom/test-utils
const actImmediate = (wrapper) =>
  act(
    () =>
      new Promise((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      })
  );

const setup = (reminder, onSubmitMock = jest.fn()) => {
  return mount(
    <ReminderForm reminder={{ ...reminder }} onSubmit={onSubmitMock} />
  );
};

describe('components::reminders::ReminderForm', () => {
  const inputByNameSelector = (name) => `input[name="${name}"]`;
  const reminder = {
    id: null,
    description: 'Lorem Ipsum',
    color: DEFAULT_COLOR,
    date: '2020-12-12',
    time: '13:45',
    city: '',
  };

  test('populates initial values from props', () => {
    const validateInputField = (name) => {
      const wrapper = setup(reminder);

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

  describe('submission', () => {
    test('calls onSubmit with correct values when its valid', async () => {
      const onSubmitMock = jest.fn();
      const wrapper = setup(reminder, onSubmitMock);
      wrapper.find('form').simulate('submit');
      await actImmediate(wrapper);
      expect(onSubmitMock).toHaveBeenCalledWith(reminder);
    });

    describe('validations', () => {
      describe('description', () => {
        test('without value', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              description: '',
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText(
            'Please describe your reminder'
          );
        });

        test('with more than 30 characters', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText(
            'No more than 30 character, please.'
          );
        });
      });

      describe('date', () => {
        test('without date', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              date: '',
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText(
            'Please inform the day you want to get reminded.'
          );
        });

        test('with an invalid date', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              date: '11-21-2011', // wrong format
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText('Date must be valid');
        });
      });

      describe('time', () => {
        test('without time', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              time: '',
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText(
            'Please inform the time of the day you want to get reminded.'
          );
        });

        test('with an invalid time', async () => {
          const onSubmitMock = jest.fn();
          const wrapper = setup(
            {
              ...reminder,
              time: '6:45 PM', // wrong format
            },
            onSubmitMock
          );

          wrapper.find('form').simulate('submit');
          await actImmediate(wrapper);
          expect(onSubmitMock).not.toHaveBeenCalled();
          expect(wrapper.find('form')).toIncludeText('Time must be valid');
        });
      });
    });
  });
});
