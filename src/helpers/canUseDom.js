/**
 * CanUseDom
 * This function will help you to check current situation is support DOM or NOT
 * @return boolean
 */
function canUseDom() {
  const result = typeof window !== 'undefined' && window?.document && window?.document?.createElement;

  return result;
}

export default canUseDom;
