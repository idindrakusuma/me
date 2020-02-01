import { css } from '@emotion/core';

export const styWrapper = css`
  margin: 30vh auto;
`;

export const styBtnWelcome = css`
  margin: 50px auto;
  cursor: pointer;
`;

export const styWelcomeWrapper = css`
  top: calc(50% - 60px);
  position: relative;
  max-width: 500px;
  z-index: 1;
  text-align: center;
  margin: 0px auto;

  &:before {
    left: -32px;
    top: -40px;
    content: '';
    position: absolute;
    height: 22px;
    width: 22px;
    border-top: 4px solid #0c0c0c;
    border-left: 4px solid #0c0c0c;
  }

  &:after {
    right: -30px;
    bottom: -18px;
    content: '';
    position: absolute;
    height: 22px;
    width: 22px;
    border-bottom: 4px solid #0c0c0c;
    border-right: 4px solid #0c0c0c;
  }

  h2 {
    color: #0c0c0c;
    font-family: montserrat, sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.3em;
    margin: 0px;
  }

  span {
    color: rgb(95, 95, 95);
    display: block;
    font-size: 18px;
    margin-top: 10px;
    font-family: 'roboto slab', serif;
    font-weight: 300;
  }
`;
