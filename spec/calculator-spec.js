import expect from 'expect';

import { Calculator } from '../js/calculator';

describe('Calculator', () => {
  var calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('adds numbers', () => {
    let result = calculator.add(3, 4);
    expect(result).toBe(7);
  });

  it('subtracts numbers', () => {
    let result = calculator.subtract(9, 3);
    expect(result).toBe(6);
  });

  it('multiplies numbers', () => {
    let result = calculator.multiply(2, 4);
    expect(result).toBe(8);
  });

  it('divides numbers', () => {
    let result = calculator.divide(12, 4);
    expect(result).toBe(3);
  });
});
