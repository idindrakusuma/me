import pxToRem from '../pxToRem';

describe('Verifying `pxToRem` helpers..', () => {
  test('should return final number with `rem`', () => {
    expect(pxToRem(14)).toBe('1rem');
    expect(pxToRem(28)).toBe('2rem');
  });
});
