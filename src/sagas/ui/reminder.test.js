import { apply, call, put } from 'redux-saga/effects';
import {
  editReminder,
  newReminder,
  openReminder,
  submitReminder,
} from './reminder';
import * as reminderUIActions from '../../actions/ui/reminder';
import { DateTime } from 'luxon';
import { DEFAULT_COLOR } from '../../helpers/colors';
import { generateUUID } from '../../helpers/uuid';
import { dateTimeStringsToMillis } from '../../helpers/calendar';
import { setReminder } from '../../actions/reminders';
import { setDateReminder } from '../../actions/dates';

describe('sagas::ui::reminder', () => {
  test('openReminder', () => {
    const iterator = openReminder({
      city: 'Lorem Ipsum',
      color: 'indigo-600',
      dateTime: 1608247620000,
      description: 'TEST EDITED',
      id: 'hqsd5mj1g7o13jkyhdeg',
    });

    expect(iterator.next().value).toEqual(
      put(
        reminderUIActions.openReminder({
          city: 'Lorem Ipsum',
          color: 'indigo-600',
          dateTime: 1608247620000,
          description: 'TEST EDITED',
          id: 'hqsd5mj1g7o13jkyhdeg',
        })
      )
    );
  });

  test('newReminder', () => {
    let iterator = newReminder(reminderUIActions.newReminder());
    expect(iterator.next().value).toEqual(apply(DateTime, 'local'));

    const now = DateTime.fromMillis(1608247620000);
    expect(iterator.next(now).value).toEqual(
      call(openReminder, {
        id: null,
        description: '',
        color: DEFAULT_COLOR,
        dateTime: 1608247620000,
        city: '',
      })
    );

    iterator = newReminder(
      // '2020-12-17' is the date part from 1608247620000
      reminderUIActions.newReminder('2020-12-17')
    );
    expect(iterator.next().value).toEqual(apply(DateTime, 'local'));
    expect(iterator.next(now).value).toEqual(
      call(openReminder, {
        id: null,
        description: '',
        color: DEFAULT_COLOR,
        dateTime: 1608247620000,
        city: '',
      })
    );
  });

  test('editReminder', () => {
    const iterator = editReminder(
      reminderUIActions.editReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'hqsd5mj1g7o13jkyhdeg',
      })
    );

    expect(iterator.next().value).toEqual(
      call(openReminder, {
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        dateTime: 1608247620000,
        description: 'TEST EDITED',
        id: 'hqsd5mj1g7o13jkyhdeg',
      })
    );
  });

  test('submitReminder - new', () => {
    const iterator = submitReminder(
      reminderUIActions.submitReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        date: '2020-12-11',
        time: '10:55',
        description: 'TEST',
        id: null,
      })
    );

    expect(iterator.next().value).toEqual(call(generateUUID));
    expect(iterator.next('some-id').value).toEqual(
      put(
        setReminder({
          id: 'some-id',
          description: 'TEST',
          color: 'indigo-600',
          dateTime: dateTimeStringsToMillis('2020-12-11', '10:55'),
          city: 'Lorem Ipsum',
        })
      )
    );
    expect(iterator.next().value).toEqual(
      put(
        setDateReminder({
          date: '2020-12-11',
          reminderId: 'some-id',
        })
      )
    );
    expect(iterator.next().value).toEqual(
      put(reminderUIActions.closeReminder())
    );
  });

  test('submitReminder - existing', () => {
    const iterator = submitReminder(
      reminderUIActions.submitReminder({
        city: 'Lorem Ipsum',
        color: 'indigo-600',
        date: '2020-12-11',
        time: '10:55',
        description: 'TEST',
        id: 'some-existing-id',
      })
    );

    expect(iterator.next().value).toEqual(
      put(
        setReminder({
          id: 'some-existing-id',
          description: 'TEST',
          color: 'indigo-600',
          dateTime: dateTimeStringsToMillis('2020-12-11', '10:55'),
          city: 'Lorem Ipsum',
        })
      )
    );
    expect(iterator.next().value).toEqual(
      put(
        setDateReminder({
          date: '2020-12-11',
          reminderId: 'some-existing-id',
        })
      )
    );
    expect(iterator.next().value).toEqual(
      put(reminderUIActions.closeReminder())
    );
  });
});
