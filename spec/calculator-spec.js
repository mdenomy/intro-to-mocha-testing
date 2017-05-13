import expect from 'expect';

import { Calculator } from '../js/calculator';

describe('Calculator', () => {
  it('adds numbers', () => {
    let calculator = new Calculator();
    let result = calculator.add(3, 4);
    expect(result).toBe(7);
  });
});
