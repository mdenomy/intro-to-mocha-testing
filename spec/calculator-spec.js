import expect from 'expect';

import { Calculator } from '../js/calculator';

describe('Calculator', () => {
  it('adds numbers', () => {
    let calculator = new Calculator();
    let result = calculator.add(3, 4);
    expect(result).toBe(7);
  });

  it('subtracts numbers', () => {
    let calculator = new Calculator();
    let result = calculator.subtract(9, 3);
    expect(result).toBe(6);
  });

  it('multiplies numbers', () => {
    let calculator = new Calculator();
    let result = calculator.multiply(2, 4);
    expect(result).toBe(8);
  });

  it('divides numbers', () => {
    let calculator = new Calculator();
    let result = calculator.divide(12, 4);
    expect(result).toBe(3);
  });
});
