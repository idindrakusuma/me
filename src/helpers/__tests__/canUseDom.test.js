import canUseDom from '../canUseDom';

describe('Verifying `canUseDom` helpers..', () => {
  test('should return `true` when we can use DOM', () => {
    const result = typeof window !== 'undefined' && window?.document && window?.document?.createElement;
    const DOMResult = canUseDom();

    expect(DOMResult).toBe(result);
  });
});
