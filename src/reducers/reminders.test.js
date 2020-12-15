import { setReminder } from '../actions/reminders';
import reminders from './reminders';

describe('reducers::reminders', () => {
  test('SET_REMINDER', () => {
    let state = reminders(undefined, {});
    expect(state).toEqual({});

    state = reminders(
      state,
      setReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: 'hqsd5mj1g7o13jkyhdeg',
      })
    );
    expect(state).toEqual({
      hqsd5mj1g7o13jkyhdeg: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
    });

    state = reminders(
      state,
      setReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'hqsd5mj1g7o13jkyhdeg',
      })
    );
    expect(state).toEqual({
      hqsd5mj1g7o13jkyhdeg: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
    });

    state = reminders(
      state,
      setReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'another-id',
      })
    );
    expect(state).toEqual({
      hqsd5mj1g7o13jkyhdeg: {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'hqsd5mj1g7o13jkyhdeg',
      },
      'another-id': {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'another-id',
      },
    });
  });
});
