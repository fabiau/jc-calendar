export const getDateReminders = (state, props) =>
  state.dates?.[props.dateId]?.reminders;
