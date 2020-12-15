import { setDateReminder, SET_DATE_REMINDER } from './dates';

describe('actions::dates', () => {
  test('setDateReminder', () => {
    const action = setDateReminder({
      date: '2020-12-12',
      reminderId: 'hqsd5mj1g7o13jkyhdeg',
    });

    expect(action).toEqual({
      type: SET_DATE_REMINDER,
      payload: {
        date: '2020-12-12',
        reminderId: 'hqsd5mj1g7o13jkyhdeg',
      },
    });
  });
});
