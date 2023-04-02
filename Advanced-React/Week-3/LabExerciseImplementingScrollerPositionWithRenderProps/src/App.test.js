import { render, screen } from '@testing-library/react';
import AppSolution from './AppSolution';

test('renders learn react link', () => {
  render(<AppSolution />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
