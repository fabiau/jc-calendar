import PropTypes from 'prop-types';
import { ALL_COLORS } from '../../../helpers/colors';

export const DatePropType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  trailing: PropTypes.bool.isRequired,
  isWeekend: PropTypes.bool.isRequired,
});

export const DateReminderPropType = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string.isRequired,
  color: PropTypes.oneOf(ALL_COLORS).isRequired,
  dateTime: PropTypes.number.isRequired,
  displayTime: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
});
