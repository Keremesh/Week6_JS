const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies  2 and 2', () => {
      expect(multiply(2, 2)).toBe(4);
  });
});