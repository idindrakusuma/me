import { css, keyframes } from '@emotion/core';

export const styWrapper = css`
  margin: 25vh auto;
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

/**
 * Style for contact page
 * */
export const styText = css`
  p {
    line-height: 28px;
    color: #2c2c2c;
    font-size: 14px;
    font-family: 'montserrat', sans-serif;
  }

  a {
    color: #2c2c2c;
  }
`;

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(-10deg);
  }

  20% {
    transform: rotate(12deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  40% {
    transform: rotate(9deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const styContactSocMed = css`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 10px 0 0;

    &:hover {
      transform-origin: 70% 70%;
      animation: ${wave} 2.5s ease infinite;
    }
  }

  a {
    font-size: 30px;
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;
