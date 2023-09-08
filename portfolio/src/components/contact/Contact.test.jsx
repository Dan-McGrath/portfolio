import { render, screen } from '@testing-library/react';
import ContactForm from './Contact';

describe('ContactForm component', () => {
  it('renders ContactForm'),
    () => {
      const { container } = render(<ContactForm />);
      expect(container).toMatchSnapshot();
    };
});
