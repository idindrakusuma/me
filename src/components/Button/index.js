import React from 'react';
import { func, string, object, bool, node } from 'prop-types';
import noop from '@helpers/noop';

import { styButton, stySmall } from './styles';

function Button({ onClick, label, className, small, children, ...rest }) {
  return (
    <button
      css={[className, styButton, small ? stySmall : '']}
      type="button"
      aria-label={label}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  label: string,
  children: node.isRequired,
  className: object,
  small: bool,
  onClick: func,
};

Button.defaultProps = {
  label: '',
  small: false,
  className: {},
  onClick: noop,
};

export default Button;
