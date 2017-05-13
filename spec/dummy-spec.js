import expect from 'expect';

describe('Test Environment', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should fail', () => {
    expect(true).toBe(false);
  });
});
