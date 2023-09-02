import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  it('renders About'),
    () => {
      const { container } = render(<About />);
      expect(container).toMatchSnapshot();
    };
});
