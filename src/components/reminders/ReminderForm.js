import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormTextInput from '../shared/forms/FormTextInput';
import FormErrorMessage from '../shared/forms/FormErrorMessage';
import FormLabel from '../shared/forms/FormLabel';
import FormFieldset from '../shared/forms/FormFieldset';

const ReminderSchema = Yup.object().shape({
  description: Yup.string()
    .max(30, 'No more than 30 character, please.')
    .required('Please describe your reminder (max: 30 character).'),
});

class ReminderForm extends Component {
  getInitialValues = () => {
    const { description, dateTime } = this.props.reminder;

    return {
      description,
      dateTime,
    };
  };

  handleSubmit = (values) => {
    console.log('Submitting...', values);
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
            <Field
              id="description"
              name="description"
              component={FormTextInput}
              placeholder="e.g.: Buy milk"
            />
            <ErrorMessage component={FormErrorMessage} name="description" />
          </FormFieldset>

          <FormFieldset>
            <FormLabel htmlFor="dateTime">When?</FormLabel>
            <Field
              id="dateTime"
              name="dateTime"
              component={FormTextInput}
              placeholder="e.g.: Buy milk"
            />
            <ErrorMessage component={FormErrorMessage} name="dateTime" />
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
        </Form>
      </Formik>
    );
  }
}

ReminderForm.propTypes = {
  reminder: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['']).isRequired, // TODO: Add colors definitions
    dateTime: PropTypes.instanceOf(DateTime).isRequired,
    cityName: PropTypes.string.isRequired,
  }).isRequired,
  // onClose: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};

export default ReminderForm;
