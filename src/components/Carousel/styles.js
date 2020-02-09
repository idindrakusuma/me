import { css, keyframes } from '@emotion/core';
import { WIDTH_SM } from '@/constants/screen';
import { ITEM_ID } from './constants';

export const fade = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
`;

export const styWrapper = css`
  * {
    box-sizing: border-box;
  }

  cursor: pointer;

  /* Hide the images by default */
  .${ITEM_ID} {
    display: none;
  }

  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active,
  .dot:hover {
    background-color: #717171;
  }

  .fade {
    animation-name: ${fade};
    animation-duration: 1.5s;
  }
`;

export const styItemWrapper = css`
  display: flex;
  width: 100%;
`;

export const styItemImage = css`
  width: 30%;

  @media only screen and (max-width: ${WIDTH_SM}) {
    width: 0%;
    display: none;
  }

  img {
    border: solid 1px #ececec;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`;

export const styTextWrapper = css`
  width: 70%;

  p {
    font-family: 'montserrat', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
  }

  span {
    font-size: 14px;
  }

  .title {
    margin-left: 4px;
    font-size: 12px;
  }

  @media only screen and (max-width: ${WIDTH_SM}) {
    width: 100%;
    p {
      margin-top: -10px;
    }
  }
`;
