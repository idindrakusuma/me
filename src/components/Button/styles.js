import { css } from '@emotion/core';

export const styButton = css`
  display: block;
  background: #0c0c0c;
  color: #fff;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: 1s ease-out;

  &:hover {
    background: linear-gradient(to right, #2b32b2, #1488cc);
  }
`;

export const stySmall = css`
  font-size: 12px;
`;
