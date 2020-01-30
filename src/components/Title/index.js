import React from 'react';
import { string, object, bool } from 'prop-types';

import { styTitle, styUppercase } from './styles';

function Title({ text, uppercase, propOptions, padding, margin }) {
  return (
    <div style={{ padding, margin }}>
      <div css={styTitle} {...propOptions}>
        <h2 css={uppercase ? styUppercase : ''}>{text}</h2>
      </div>
    </div>
  );
}

Title.propTypes = {
  propOptions: object,
  text: string.isRequired,
  uppercase: bool,
  padding: string,
  margin: string,
};

Title.defaultProps = {
  propOptions: {},
  uppercase: true,
  padding: '',
  margin: '',
};

export default Title;
