import React from 'react';
import { func, string, object } from 'prop-types';
import noop from '@helpers/noop';

import { styButton } from './styles';

function Button({ onClick, label, className, propOptions }) {
  return (
    <button css={[className, styButton]} type="button" aria-label={label} onClick={onClick} {...propOptions}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: string,
  className: object,
  propOptions: object,
  onClick: func,
};

Button.defaultProps = {
  label: '',
  className: {},
  propOptions: {},
  onClick: noop,
};

export default Button;
