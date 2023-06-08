import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Buttons';

describe('testing my Button component', () => {
  // Tests that the Button component renders without the computeFunction prop.
  test('test_button_computeFunction_not_passed', () => {
    const { container } = render(<Button name="Test Button" />);

    const element = container.firstChild;

    expect(element).toHaveAttribute('type', 'button');
  });
});
