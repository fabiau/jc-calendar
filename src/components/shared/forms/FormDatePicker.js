import React from 'react';
import classNames from 'classnames';

// Should be used with Formik.Field component prop
function FormDatePicker({
  field,
  form: { touched, errors },
  className,
  ...props
}) {
  const hasError = touched[field.name] && Boolean(errors[field.name]);

  return (
    <input
      type="date"
      className={classNames(
        'placeholder-gray-400 bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm rounded-md',
        {
          'ring-2 ring-red-500': hasError,
        },
        className
      )}
      {...field}
      {...props}
    />
  );
}

export default FormDatePicker;
