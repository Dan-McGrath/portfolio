import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders nav'),
    () => {
      const { container } = render(<Nav />);
      expect(container).toMatchSnapshot();
    };
});
