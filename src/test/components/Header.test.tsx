import { render, screen } from '@testing-library/react';
import Header from 'components/Header';

test('renders app header', () => {
  render(<Header />);
  const headingElement = screen.getByText(/This is an Autocomplete App/i);
  expect(headingElement).toBeInTheDocument();
});
