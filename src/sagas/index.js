import { all, call, spawn } from 'redux-saga/effects';
import { IS_PRODUCTION } from '../config/env';
import { watchAndLog } from './logger';
import { watchGetForecast } from './ui/forecast';
import {
  watchEditReminder,
  watchNewReminder,
  watchSubmitReminder,
} from './ui/reminder';

/**
 * Spawns given sagas, restarting them if they throw any uncaught error.
 * @param  {...GeneratorFunction} sagas The sagas to spawn and keep alive
 */
function* keepAlive(...sagas) {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            // Start the worker saga
            yield call(saga);
            // If it finishes, exit
            break;
          } catch (e) {
            // If an error happens it will be logged
            // and the loop will restart the saga
            console.groupCollapsed(
              `%cSaga ${saga.name} crashed and will be restarted...`,
              `
                font-size: 600;
                color: #DC2626;
                background-color: #FECACA;
                padding: 0.125rem 0.25rem;
                border-radius: 0.125rem;
              `
            );
            console.error(e);
            console.groupEnd();
          }
        }
      })
    )
  );
}

export default function* rootSaga() {
  const sagas = [
    watchNewReminder,
    watchEditReminder,
    watchSubmitReminder,
    watchGetForecast,
  ];
  if (!IS_PRODUCTION) {
    sagas.unshift(watchAndLog);
  }

  yield keepAlive(...sagas);
}
