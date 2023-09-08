import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders hero'),
    () => {
      const { container } = render(<Hero />);
      expect(container).toMatchSnapshot();
    };
});
