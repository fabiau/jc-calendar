import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormTextInput from '../shared/forms/FormTextInput';
import FormDatePicker from '../shared/forms/FormDatePicker';
import FormErrorMessage from '../shared/forms/FormErrorMessage';
import FormLabel from '../shared/forms/FormLabel';
import FormFieldset from '../shared/forms/FormFieldset';
import BaseButton from '../shared/buttons/BaseButton';
import FormActions from '../shared/forms/FormActions';
import CheckIcon from '../icons/CheckIcon';
import {
  DATE_FORMAT,
  DATE_REGEX,
  TIME_FORMAT,
  TIME_REGEX,
} from '../../helpers/calendar';
import FormTimePicker from '../shared/forms/FormTimePicker';
import ReminderColorPicker from './ReminderColorPicker';
import { ALL_COLORS } from '../../helpers/colors';
import { ReminderPropType } from '../shared/prop-types/reminder';

const ReminderSchema = Yup.object().shape({
  description: Yup.string()
    .max(30, 'No more than 30 character, please.')
    .required('Please describe your reminder (max: 30 character).'),
  color: Yup.string()
    .oneOf(ALL_COLORS, 'Color is invalid.')
    .required('Please inform a color.'),
  date: Yup.string()
    .matches(DATE_REGEX, `Date must be valid (${DATE_FORMAT}).`)
    .required('Please inform the day you want to get reminded.'),
  time: Yup.string()
    .matches(TIME_REGEX, `Time must be valid (${TIME_FORMAT}).`)
    .required('Please inform the time of the day you want to get reminded.'),
});

class ReminderForm extends Component {
  getInitialValues = () => {
    const { description, color, date, time, cityName } = this.props.reminder;

    return {
      description,
      color,
      date,
      time,
      city: cityName,
    };
  };

  handleSubmit = (values) => {
    this.props.onSubmit({
      id: this.props.reminder.id,
      description: values.description,
      color: values.color,
      cityName: values.city,
      date: values.date,
      time: values.time,
    });
  };

  render() {
    return (
      <Formik
        initialValues={this.getInitialValues()}
        validationSchema={ReminderSchema}
        onSubmit={this.handleSubmit}
      >
        <Form className="w-full flex flex-col gap-3">
          <FormFieldset>
            <FormLabel htmlFor="description">
              What do you want to remember?
            </FormLabel>
            <div className="flex flex-row flex-wrap gap-2">
              <Field
                id="description"
                name="description"
                component={FormTextInput}
                placeholder="e.g.: Buy milk"
                className="flex-grow"
              />
              <Field
                name="color"
                as={ReminderColorPicker}
                className="flex-shrink"
              />
            </div>
            <ErrorMessage component={FormErrorMessage} name="description" />
            <ErrorMessage component={FormErrorMessage} name="color" />
          </FormFieldset>

          <FormFieldset>
            <FormLabel htmlFor="date">When?</FormLabel>

            <div className="flex flex-row flex-wrap gap-2">
              <Field
                id="date"
                name="date"
                component={FormDatePicker}
                className="flex-grow"
              />
              <Field
                id="time"
                name="time"
                component={FormTimePicker}
                className="w-full sm:w-44"
              />
            </div>
            <ErrorMessage component={FormErrorMessage} name="date" />
            <ErrorMessage component={FormErrorMessage} name="time" />
          </FormFieldset>

          <FormFieldset>
            <FormLabel htmlFor="city">Where?</FormLabel>
            <Field
              id="city"
              name="city"
              component={FormTextInput}
              placeholder="e.g.: New York City"
            />
            <ErrorMessage component={FormErrorMessage} name="city" />
          </FormFieldset>

          <FormActions>
            <BaseButton
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-500 text-white"
            >
              <CheckIcon svgClassName="w-6 h-6" />
              Confirm
            </BaseButton>
          </FormActions>
        </Form>
      </Formik>
    );
  }
}

ReminderForm.propTypes = {
  reminder: ReminderPropType.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReminderForm;
