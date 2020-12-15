import PropTypes from 'prop-types';
import { ALL_COLORS } from '../../../helpers/colors';

export const ReminderPropType = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string.isRequired,
  color: PropTypes.oneOf(ALL_COLORS).isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
});
