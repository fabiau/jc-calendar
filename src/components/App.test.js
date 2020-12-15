import { render, suppressUseLayoutReduxWarning } from '../test-utils';
import App from './App';

describe('components::App', () => {
  suppressUseLayoutReduxWarning();
  test('renders without crashing', () => {
    render(<App />);
  });
});
