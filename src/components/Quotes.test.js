import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../routes/Quotes';

jest.mock('./useFetch');

describe('testing my Quotes component', () => {
  test('test the post quote, after fetching the api', async () => {
    render(<Quotes />);

    expect(await screen.findByText(/John Doe/)).toBeInTheDocument();
  });
});
