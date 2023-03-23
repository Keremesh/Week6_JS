const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it("returns 'fizzbuzz' for a number divisible by 3 and 5", () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
    expect(fizzbuzz(45)).toBe('FizzBuzz');
  });

  it("returns 'fizz' for a number divisible by 3", () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
    expect(fizzbuzz(99)).toBe('Fizz');
  });

  it("returns 'buzz' for a number divisible by 5", () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
    expect(fizzbuzz(140)).toBe('Buzz');
  });

});