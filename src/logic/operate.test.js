import operate from './operate';

// Tests that addition works correctly.
it('test_addition', () => {
  expect(operate(2, 3, '+')).toBe('5');
  expect(operate(0.1, 0.2, '+')).toBe('0.3');
  expect(operate(-5, 10, '+')).toBe('5');
});

// Tests that subtraction works correctly.
it('test_subtraction', () => {
  expect(operate(5, 3, '-')).toBe('2');
  expect(operate(0.2, 0.1, '-')).toBe('0.1');
  expect(operate(-5, -10, '-')).toBe('5');
});

// Tests that division by zero returns the correct error message.
it('test_division_by_zero', () => {
  expect(operate(5, 0, '/')).toBe("Can't divide by 0.");
  expect(operate(-10, 0, '/')).toBe("Can't divide by 0.");
  expect(operate(0, 0, '/')).toBe("Can't divide by 0.");
});

// Tests that modulo by zero returns the correct error message.
it('test_modulo_by_zero', () => {
  expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  expect(operate(-10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  expect(operate(0, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

// Tests that multiplication works correctly.
it('test_multiplication', () => {
  expect(operate(2, 3, 'x')).toBe('6');
  expect(operate(0.1, 0.2, 'x')).toBe('0.02');
  expect(operate(-5, -10, 'x')).toBe('50');
});

// Tests that an invalid operation throws an error.
it('test_invalid_operation', () => {
  expect(() => operate(2, 3, 'invalid')).toThrowError("Unknown operation 'invalid'");
  expect(() => operate(0.1, 0.2, 'invalid')).toThrowError("Unknown operation 'invalid'");
  expect(() => operate(-5, -10, 'invalid')).toThrowError("Unknown operation 'invalid'");
});
