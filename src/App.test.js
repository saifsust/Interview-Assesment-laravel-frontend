import { render, screen } from '@testing-library/react';
import './LoginApp'
import LoginForm from './LoginApp';

test('renders learn react link', () => {
  render(<LoginForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
