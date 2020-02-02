import { css } from '@emotion/core';

export const container = css`
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  p {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export const timeline = css`
  position: relative;
  max-width: 95%;
  list-style: none;
  margin-top: 3em;

  &:before {
    background-color: black;
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
`;

export const event = css`
  position: relative;
`;

export const icon = css`
  transform: rotate(45deg);
  background-color: black;
  outline: 5px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 1em;
  width: 1em;
  height: 1em;
`;

export const body = css`
  padding: 2em 2em 0 2em;
  position: relative;
  top: -1.875em;
  left: 2em;
  width: 95%;
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const date = css`
  color: white;
  background-color: black;
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
`;

export const description = css`
  font-size: 14px;
  strong {
    font-weight: 700;
  }
  p {
    padding-bottom: 1em;
  }
`;
