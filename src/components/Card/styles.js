import { css } from '@emotion/core';
import { WIDTH_SM, WIDTH_MD } from '@/constants/screen';

export const styCardWrapper = css`
  padding: 60px;
  position: relative;
  background: #fff;
  color: #2c2c2c;

  @media only screen and (max-width: ${WIDTH_MD}) {
    padding: 16px;
    margin: 0 auto;
  }

  @media only screen and (max-width: ${WIDTH_SM}) {
    padding: 14px;
  }
`;

export const styHeaderWrapper = css`
  margin-bottom: 20px;
  position: relative;

  @media only screen and (max-width: ${WIDTH_SM}) {
    display: flex;
    margin-top: 10px;

    h2 {
      font-weight: bold;
    }
  }
`;
