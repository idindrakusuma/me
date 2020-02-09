import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import pxToRem from '@helpers/pxToRem';
import { WIDTH_SM, WIDTH_MD } from '@/constants/screen';

export const styWrapper = css`
  margin: 25vh auto;

  @media only screen and (max-width: 1023px) {
    margin: 0 auto;
  }
`;

export const styBtnWelcome = css`
  margin: 50px auto;
  cursor: pointer;

  @media only screen and (max-width: ${WIDTH_SM}) {
    font-size: ${pxToRem(12)};
  }
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
    font-size: ${pxToRem(25)};
    font-weight: 400;
    line-height: 1.3em;
    margin: 0px;
  }

  span {
    color: rgb(95, 95, 95);
    display: block;
    font-size: ${pxToRem(18)};
    margin-top: 10px;
    font-family: 'roboto slab', serif;
    font-weight: 300;
  }

  @media only screen and (max-width: ${WIDTH_MD}) {
    &:before {
      left: 8px;
      top: -20px;
      border-top: 3px solid #0c0c0c;
      border-left: 3px solid #0c0c0c;
    }

    &:after {
      right: 8px;
      bottom: -20px;
      border-bottom: 3px solid #0c0c0c;
      border-right: 3px solid #0c0c0c;
    }
  }

  @media only screen and (max-width: ${WIDTH_SM}) {
    &:before {
      border-top: 0;
      border-left: 0;
    }

    &:after {
      border-bottom: 0;
      border-right: 0;
    }

    h2 {
      font-size: ${pxToRem(16)};
    }

    span {
      font-size: ${pxToRem(14)};
    }
  }
`;

/**
 * Style for contact page
 * */
export const styText = css`
  p {
    line-height: 28px;
    color: #2c2c2c;
    font-size: ${pxToRem(14)};
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
    font-size: ${pxToRem(30)};
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;

export const Typography = styled.p`
  font-size: ${pxToRem(14)};
  font-family: 'montserrat', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #2c2c2c;
  margin: 20px 0;

  a {
    color: #2c2c2c;
  }
`;

export const styFlexCenter = css`
  display: flex;
  align-items: center;
`;
