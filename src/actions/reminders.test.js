import { setReminder, SET_REMINDER } from './reminders';

describe('actions::reminders', () => {
  test('setReminder', () => {
    const action = setReminder({
      city: 'Lorem Ipsum',
      color: 'indigo-600',
      dateTime: 1608247620000,
      description: 'TEST',
      id: 'hqsd5mj1g7o13jkyhdeg',
    });

    expect(action).toEqual({
      type: SET_REMINDER,
      payload: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
    });
  });
});
