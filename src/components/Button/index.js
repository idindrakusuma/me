import React from 'react';
import { func, string, object, bool } from 'prop-types';
import noop from '@helpers/noop';

import { styButton, stySmall } from './styles';

function Button({ onClick, label, className, propOptions, small }) {
  return (
    <button
      css={[className, styButton, small ? stySmall : '']}
      type="button"
      aria-label={label}
      onClick={onClick}
      {...propOptions}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: string,
  className: object,
  propOptions: object,
  small: bool,
  onClick: func,
};

Button.defaultProps = {
  label: '',
  small: false,
  className: {},
  propOptions: {},
  onClick: noop,
};

export default Button;
