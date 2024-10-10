const { add, isUserValid } = require('../utility');

describe('Utility Functions', () => {
  test('add function adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('isUserValid returns true', () => {
    expect(isUserValid()).toBe(true);
  });
});
