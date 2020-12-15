import { setMonth, SET_MONTH } from './month';

describe('actions::ui::month', () => {
  test('setMonth', () => {
    let action = setMonth('2020-12-12');

    expect(action).toEqual({
      type: SET_MONTH,
      payload: '2020-12-12',
    });

    action = setMonth(null);

    expect(action).toEqual({
      type: SET_MONTH,
      payload: null,
    });
  });
});
