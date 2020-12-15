import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChevronsUpIcon from '../../icons/ChevronsUpIcon';
import ChevronsDownIcon from '../../icons/ChevronsDownIcon';

function ReminderForecast({ forecast }) {
  const hasForecast = Boolean(forecast);

  return (
    <div
      className={classNames('w-full h-auto transition-all duration-1000', {
        'max-h-96 opacity-100': hasForecast,
        'max-h-0 opacity-0': !hasForecast,
      })}
    >
      {hasForecast && (
        <div className="border border-gray-300 rounded-md p-4 flex flex-row flex-wrap gap-x-12 gap-y-4 items-center">
          <div className="flex flex-col gap-2 justify-center items-end">
            {forecast.maxTemp && (
              <div className="flex gap-1 items-start">
                <p title="Max. Temp." className="text-3xl font-medium">
                  {forecast.maxTemp.toFixed(1)}&deg;F
                </p>
                <ChevronsUpIcon svgClassName="w-6 h-6" />
              </div>
            )}
            {forecast.minTemp && (
              <div className="flex gap-1 items-center text-gray-700">
                <p title="Min. Temp." className="text-2xl">
                  {forecast.minTemp.toFixed(1)}&deg;F
                </p>
                <ChevronsDownIcon svgClassName="w-5 h-5" />
              </div>
            )}
          </div>

          {forecast.condition?.text && (
            <div className="flex flex-row gap-2 items-center justify-start">
              {forecast.condition?.icon && (
                <img
                  alt={forecast.condition.text}
                  src={forecast.condition.icon}
                  className="w-16 h-16"
                />
              )}
              <p title="Condition" className="text-xl font-medium">
                {forecast.condition.text}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

ReminderForecast.propTypes = {
  forecast: PropTypes.shape({
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    avgTemp: PropTypes.number,
    condition: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
  }),
};

export default ReminderForecast;
