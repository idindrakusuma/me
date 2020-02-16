import noop from '../noop';

describe('Verifying `noop` helpers..', () => {
  test('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
