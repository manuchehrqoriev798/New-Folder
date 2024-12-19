import { render, screen } from '@testing-library/react';
import App from './App';

test('renders news website navbar brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/News Website/i);
  expect(brandElement).toBeInTheDocument();
});
