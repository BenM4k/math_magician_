import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Testing Navigation', () => {
  test('Navigate to calculator page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    userEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText(/Let's do some Math!/)).toBeInTheDocument();
  });
});
