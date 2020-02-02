import { css } from '@emotion/core';

export const styWrapper = css`
  display: block;
  width: 100%;

  h3 {
    &:hover {
      color: #1488cc;
      cursor: pointer;
    }
  }

  .description {
    font-size: 14px;
    font-family: 'montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: #2c2c2c;
    margin: 20px 0 10px;
  }
`;
