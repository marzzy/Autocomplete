import { render, screen } from '@testing-library/react';
import Input from 'components/Input';

test('renders SearchInput', () => {
  render(<Input />);
  const inputComponent = screen.getByPlaceholderText(/choose the product/i);
  expect(inputComponent).toBeInTheDocument();
});
