import add from './add.js';

describe('Add', () => {
  test('should add two numbers correctly', () => {
    expect(add(1,2)).toBe(3);
  });
});
