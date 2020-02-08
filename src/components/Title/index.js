import React from 'react';
import { string, bool } from 'prop-types';
import { TitleStyle, styUppercase } from './styles';

function Title({ text, uppercase, padding, light, margin, ...rest }) {
  return (
    <div style={{ padding, margin }}>
      <TitleStyle light={light} {...rest}>
        <h2 css={uppercase && styUppercase}>{text}</h2>
      </TitleStyle>
    </div>
  );
}

Title.propTypes = {
  text: string.isRequired,
  uppercase: bool,
  padding: string,
  margin: string,
  light: bool,
};

Title.defaultProps = {
  uppercase: true,
  padding: '',
  margin: '',
  light: false,
};

export default Title;
