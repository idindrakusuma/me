import React from 'react';
import { func, string, object } from 'prop-types';
import noop from '../../helpers/noop';

import { btnStyles } from './styles';

function Button({ onClick, label, propOptions }) {
  return (
    <button
      css={btnStyles}
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
  propOptions: object,
  onClick: func,
};

Button.defaultProps = {
  label: '',
  propOptions: {},
  onClick: noop,
};

export default Button;
