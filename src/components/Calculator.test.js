import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';
import '@testing-library/jest-dom';

describe('testing my buttons', () => {
  test('check buttons name display', () => {
    render(<Calculator />);

    expect(screen.getByText('=')).toHaveAttribute('name', '=');
    expect(screen.getByText('+')).toHaveAttribute('name', '+');
    expect(screen.getByText('-')).toHaveAttribute('name', '-');
    expect(screen.getByText('x')).toHaveAttribute('name', 'x');
    expect(screen.getByText('/')).toHaveAttribute('name', '/');

    expect(screen.getByText('.')).toHaveAttribute('name', '.');
    expect(screen.getByText('3')).toHaveAttribute('name', '3');
    expect(screen.getByText('6')).toHaveAttribute('name', '6');
    expect(screen.getByText('9')).toHaveAttribute('name', '9');
    expect(screen.getByText('%')).toHaveAttribute('name', '%');

    expect(screen.getByText('2')).toHaveAttribute('name', '2');
    expect(screen.getByText('4')).toHaveAttribute('name', '4');
    expect(screen.getByText('8')).toHaveAttribute('name', '8');
    expect(screen.getByText('+/-')).toHaveAttribute('name', '+/-');

    expect(screen.getByText('1')).toHaveAttribute('name', '1');
    expect(screen.getByText('5')).toHaveAttribute('name', '5');
    expect(screen.getByText('7')).toHaveAttribute('name', '7');
    expect(screen.getByText('AC')).toHaveAttribute('name', 'AC');
  });
});
