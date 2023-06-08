import calculate, { isNumber } from './calculate';

it('test_is_number_returns_true_for_string_of_digits', () => {
  expect(isNumber('123')).toBe(true);
});

// Tests that pressing the 'AC' button clears the calculator.
it('test_calculate_AC_button', () => {
  const obj = {
    total: 10,
    next: 5,
    operation: '+',
  };
  const buttonName = 'AC';
  const expected = {
    total: 0,
    next: null,
    operation: null,
  };
  const result = calculate(obj, buttonName);
  expect(result).toEqual(expected);
});

// Tests that entering a decimal updates the next value.
it('test_calculate_decimal', () => {
  const obj = {
    total: 10,
    next: '5',
    operation: '+',
  };
  const buttonName = '.';
  const expected = {
    total: 10,
    next: '5.',
    operation: '+',
  };
  const result = calculate(obj, buttonName);
  expect(result).toEqual(expected);
});

// Tests that entering '0' after '0' clears the calculator.
it('test_calculate_zero_after_zero', () => {
  const obj = {
    total: null,
    next: '0',
    operation: null,
  };
  const buttonName = '0';
  const expected = {};
  const result = calculate(obj, buttonName);
  expect(result).toEqual(expected);
});
