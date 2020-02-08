import { css } from '@emotion/core';

const whiteColor = '#f1f1f1';

export const avatar = css`
  margin-top: 2em;
  margin-left: 1em;
  overflow: hidden;
  width: 165px;
  height: 165px;
  border-radius: 50%;
`;

export const name = css`
  margin: 20px 0;
  color: ${whiteColor};

  h1 {
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 5px;
  }

  span {
    font-size: 15px;
    font-weight: 200;
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;

export const socialMedia = css`
  margin: 20px 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 20px 0 0;
  }

  a {
    color: #bebebe;

    &:hover {
      color: #fff;
    }
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;

export const copyright = css`
  bottom: 20px;
  position: absolute;
  letter-spacing: 2px;

  span {
    color: ${whiteColor};
    font-family: roboto slab, serif;
    font-weight: 200;
    font-size: 12px;
  }

  @media only screen and (max-height: 600px) {
    bottom: -18px;
    position: relative;
  }
`;

export const wrapper = css`
  position: fixed;
  height: 100%;
  width: 260px;
  z-index: 8;
  float: left;
  display: block;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BEFORE_EFFECT = `
  content: '';
  position: absolute;
  left: -8px;
  top: -5px;
  height: 7px;
  width: 7px;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
`;

const AFTER_EFFECT = `
  content: '';
  position: absolute;
  right: -8px;
  bottom: -5px;
  height: 7px;
  width: 7px;
  border-bottom: solid 2px #fff;
  border-right: solid 2px #fff;
`;

export const navigation = css`
  display: block;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0 10px;
  }
  li {
    padding: 8px 0;
  }
  a {
    color: #bebebe;
    font-family: montserrat, sans-serif;
    font-size: 12px;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      &:before {
        ${BEFORE_EFFECT}
      }
      &:after {
        ${AFTER_EFFECT}
      }
    }
    &.active {
      color: #fff;
      &:before {
        ${BEFORE_EFFECT}
      }
      &:after {
        ${AFTER_EFFECT}
      }
    }
  }
  @media only screen and (max-height: 600px) {
    padding-bottom: 10px;
  }
`;
