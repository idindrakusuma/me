import React from 'react';
import { func, string, object } from 'prop-types';
import noop from '@helpers/noop';

import { styButton } from './styles';

function Button({ onClick, label, propOptions }) {
  return (
    <button css={styButton} type="button" aria-label={label} onClick={onClick} {...propOptions}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: string,
  propOptions: object,
  onClick: func,
};

Button.defaultProps = {
  label: '',
  propOptions: {},
  onClick: noop,
};

export default Button;
