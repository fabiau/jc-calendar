import {
  closeReminder,
  CLOSE_REMINDER,
  editReminder,
  EDIT_REMINDER,
  newReminder,
  NEW_REMINDER,
  openReminder,
  OPEN_REMINDER,
  submitReminder,
  SUBMIT_REMINDER,
} from './reminder';

describe('actions::ui::reminders', () => {
  test('newReminder', () => {
    const action = newReminder('2020-12-12');

    expect(action).toEqual({
      type: NEW_REMINDER,
      payload: '2020-12-12',
    });
  });

  test('editReminder', () => {
    const action = editReminder({
      city: 'Lorem Ipsum',
      color: 'indigo-600',
      dateTime: 1608247620000,
      description: 'TEST',
      id: 'hqsd5mj1g7o13jkyhdeg',
    });

    expect(action).toEqual({
      type: EDIT_REMINDER,
      payload: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
    });
  });

  test('submitReminder', () => {
    const action = submitReminder({
      city: 'Lorem Ipsum',
      color: 'indigo-600',
      dateTime: 1608247620000,
      description: 'TEST',
      id: 'hqsd5mj1g7o13jkyhdeg',
    });

    expect(action).toEqual({
      type: SUBMIT_REMINDER,
      payload: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
    });
  });

  test('openReminder', () => {
    const action = openReminder({
      city: '',
      color: 'indigo-600',
      dateTime: 1608247620000,
      description: 'TEST',
      id: null,
    });

    expect(action).toEqual({
      type: OPEN_REMINDER,
      payload: {
        city: '',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: null,
      },
    });
  });

  test('closeReminder', () => {
    const action = closeReminder('2020-12-12');

    expect(action).toEqual({
      type: CLOSE_REMINDER,
    });
  });
});
