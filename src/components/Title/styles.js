import { css } from '@emotion/core';

export const styTitle = css`
  color: #1a1a1a;
  display: inline-block;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: 0 0;
    bottom: 10px;
    left: 0;
    height: 16px;
    width: 16px;
    border-left: solid 3px #0c0c0c;
    border-top: solid 3px #0c0c0c;
  }

  &:after {
    content: '';
    position: absolute;
    background: 0 0;
    bottom: -10px;
    right: -17px;
    height: 16px;
    width: 16px;
    border-right: solid 3px #0c0c0c;
    border-bottom: solid 3px #0c0c0c;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
`;

export const styUppercase = css`
  text-transform: uppercase;
`;
