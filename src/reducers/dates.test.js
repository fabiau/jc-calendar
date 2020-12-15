import { setDateReminder } from '../actions/dates';
import dates from './dates';

describe('reducers::dates', () => {
  test('SET_DATE_REMINDER', () => {
    let state = dates(undefined, {});
    expect(state).toEqual({});

    state = dates(
      state,
      setDateReminder({
        date: '2020-12-12',
        reminderId: '1',
      })
    );
    expect(state).toEqual({
      '2020-12-12': {
        id: '2020-12-12',
        reminders: ['1'],
      },
    });

    state = dates(
      state,
      setDateReminder({
        date: '2020-12-12',
        reminderId: '2',
      })
    );
    expect(state).toEqual({
      '2020-12-12': {
        id: '2020-12-12',
        reminders: ['1', '2'],
      },
    });

    state = dates(
      state,
      setDateReminder({
        date: '2020-12-12',
        reminderId: '1',
      })
    );
    expect(state).toEqual({
      '2020-12-12': {
        id: '2020-12-12',
        reminders: ['1', '2'],
      },
    });

    state = dates(
      state,
      setDateReminder({
        date: '2021-01-05',
        reminderId: '1daw123123',
      })
    );
    expect(state).toEqual({
      '2020-12-12': {
        id: '2020-12-12',
        reminders: ['1', '2'],
      },
      '2021-01-05': {
        id: '2021-01-05',
        reminders: ['1daw123123'],
      },
    });

    state = dates(
      state,
      setDateReminder({
        date: '2021-12-12',
        reminderId: '1daw123123',
      })
    );
    expect(state).toEqual({
      '2020-12-12': {
        id: '2020-12-12',
        reminders: ['1', '2'],
      },
      '2021-01-05': {
        id: '2021-01-05',
        reminders: [],
      },
      '2021-12-12': {
        id: '2021-12-12',
        reminders: ['1daw123123'],
      },
    });
  });
});
