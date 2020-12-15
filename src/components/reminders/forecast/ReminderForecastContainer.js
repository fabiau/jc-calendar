import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Formik from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forecastUIActions from '../../../actions/ui/forecast';
import * as forecastUISelectors from '../../../selectors/ui/forecast';
import ReminderForecast from './ReminderForecast';

class ReminderForecastContainer extends Component {
  static propTypes = {
    names: PropTypes.shape({
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  };

  static getFieldValue(name, formik) {
    return String(Formik.getIn(formik.values, name)).trim();
  }

  static getAllValues = (names, formik) => {
    return {
      city: ReminderForecastContainer.getFieldValue(names.city, formik),
      date: ReminderForecastContainer.getFieldValue(names.date, formik),
    };
  };

  isValid = () => {
    const { names, formik } = this.props;

    return Object.keys(names).every((name) => {
      const error = Formik.getIn(formik.errors, name);
      return (
        (typeof error === 'undefined' || Object.keys(error).length === 0) &&
        ReminderForecastContainer.getFieldValue(name, formik).length !== 0
      );
    });
  };

  componentDidMount() {
    if (this.isValid()) {
      this.props.getForecast(
        ReminderForecastContainer.getAllValues(
          this.props.names,
          this.props.formik
        )
      );
    } else {
      this.props.resetForecast();
    }
  }

  componentDidUpdate(prevProps) {
    const prevValues = ReminderForecastContainer.getAllValues(
      prevProps.names,
      prevProps.formik
    );
    const currentValues = ReminderForecastContainer.getAllValues(
      this.props.names,
      this.props.formik
    );

    if (
      prevValues.city !== currentValues.city ||
      prevValues.date !== currentValues.date
    ) {
      if (this.isValid()) {
        this.props.getForecast(currentValues);
      } else {
        this.props.resetForecast();
      }
    }
  }

  componentDidCatch(error, info) {
    console.error('Uncaught error in forecast container component', {
      error,
      info,
    });
  }

  render() {
    return <ReminderForecast forecast={this.props.forecast} />;
  }
}

function mapStateToProps(state) {
  return {
    forecast: forecastUISelectors.getForecast(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getForecast: forecastUIActions.getForecast,
      resetForecast: forecastUIActions.resetForecast,
    },
    dispatch
  );
}

const WithFormik = Formik.connect(ReminderForecastContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithFormik);
