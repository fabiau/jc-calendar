import React from 'react';
import {
  mount as enzymeMount,
  render as enzymeRender,
  shallow as enzymeShallow,
} from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

function mount(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return enzymeMount(ui, { wrappingComponent: Wrapper });
}

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return enzymeRender(<Wrapper children={ui} />, { ...renderOptions });
}

function shallow(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...shallowOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return enzymeShallow(ui, { wrappingComponent: Wrapper, ...shallowOptions });
}

/**
 * Suppresses the warning that is logged to the console related to useLayoutEffect by react-redux on a testing environment.
 *
 * For more information see: https://github.com/reduxjs/react-redux/issues/1373
 */
function suppressUseLayoutReduxWarning() {
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn((msg) => {
      if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
        return null;
      } else {
        originalConsoleError(msg);
      }
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });
}

export * from 'enzyme';
export { mount, render, shallow, suppressUseLayoutReduxWarning };
