import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header component', () => {
  it('renders Header'),
    () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
    };
});
