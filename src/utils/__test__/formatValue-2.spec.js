import formatValue from '../formatValue-2';

describe('formatValue()', () => {
  it('returns a common separated string if the value is a number', () => {
    expect(formatValue(5000)).toEqual('5,000');
    expect(formatValue(50000)).toEqual('50,000');
    expect(formatValue(500000)).toEqual('500,000');
  });

  xit('returns the value if it is not a number', () => {
    expect(formatValue('hello')).toEqual('hello');
    expect(formatValue(true)).toEqual(true);
  });
});
