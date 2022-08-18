import { render, screen } from '@testing-library/react';
import AppMain from './App';

// test('renders learn react link', () => {
//   render(<AppMain />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('renders learn react link', () => {
  render(<AppMain />);
  const div = screen.getByRole(/main/i) 
  expect(div).toBeInTheDocument();
});
