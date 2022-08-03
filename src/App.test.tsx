import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world text', () => {
  render(<App />);
  const Hello = screen.getByText(/Hello World!/i);
  expect(Hello).toBeInTheDocument();
});
