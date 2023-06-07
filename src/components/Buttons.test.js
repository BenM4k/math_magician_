import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Buttons';

describe('testing my Button component', () => {
  test('render component', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
