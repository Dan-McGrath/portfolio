import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App'),
    () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    };
});
