import { render, screen } from '@testing-library/react';
import Cards from 'components/Cards';
import fakeCardsData from 'test/fakeCardsData';

test('renders cards title', () => {
  render(<Cards data={fakeCardsData} />);
  const card01 = screen.getByText(/Weekday THURSDAY Jeans Slim Fit black/i);
  const card02 = screen.getByText(/Weekday THURSDAY Jeans Slim Fit white/i);
  const card03 = screen.getByText(/Weekday THURSDAY Jeans Slim Fit red/i);
  const card04 = screen.getByText(/Weekday THURSDAY Tshirt red/i);
  expect(card01).toBeInTheDocument();
  expect(card02).toBeInTheDocument();
  expect(card03).toBeInTheDocument();
  expect(card04).toBeInTheDocument();
});
