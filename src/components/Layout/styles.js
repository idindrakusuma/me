import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { textColor } from '@/constants/color';

const WIDTH_MD = '1024px';
const WIDTH_SM = '500px';

export const WrapperBody = styled.div`
  background: #000046;
  background: -webkit-linear-gradient(to right, #000046, #1cb5e0);
  background: linear-gradient(to right, #000046, #1cb5e0);
  overflow-x: hidden;
  margin: 0;
`;

export const Wrapper = styled.div`
  * {
    font-family: 'Roboto Slab', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    padding-left: 15px;
  }

  li {
    padding: 0 0 10px;
  }

  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (max-width: 64em) {
    width: 95%;
    margin: 16px auto;
    padding: 0;
  }
`;

export const Header = styled.header`
  position: fixed;
  height: 100%;
  width: 260px;
  z-index: 8;
  float: left;
  display: block;
`;

export const Menu = styled.menu`
  display: block;
`;

export const MainPanel = styled.div`
  background-color: #fff;
  width: 740px;
  min-height: 100vh;

  @media (min-width: 1025px) {
    float: right;
  }

  @media (max-width: ${WIDTH_MD}) {
    width: 95%;
    margin: auto;
    border-radius: 10px;
  }

  @media (max-width: ${WIDTH_SM}) {
    width: 100%;
    margin: auto;
    border-radius: 10px;
  }
`;

export const section = css`
  position: relative;
  padding: 50px 60px;
  min-height: 87vh;

  @media (max-width: ${WIDTH_MD}) {
    padding: 30px 40px;
    width: 95%;
    min-height: 95vh;
  }

  @media (max-width: ${WIDTH_SM}) {
    padding: 10px 20px;
    width: 90%;
    min-height: 95vh;
  }
`;

export const backgroundWrapper = css`
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

export const row = css`
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DEFAULT_COL_STYLE = `
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

export const colXs6 = css`
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  width: 50%;

  ${DEFAULT_COL_STYLE}
`;

export const colXs12 = css`
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  width: 100%;

  ${DEFAULT_COL_STYLE}
`;

/* Style for About */
export const intro = css`
  font-size: 14px;
  font-family: 'montserrat', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #2c2c2c;
  margin: 20px 0;
`;

export const info = css`
  margin-bottom: 40px;
  padding: 0 !important;
  width: 100%;
  list-style: none;

  li {
    &:first-of-type {
      padding-top: 0;
    }

    a {
      color: ${textColor};
      text-decoration: none;
    }

    border-bottom: dashed 1px #ddd;
    padding: 15px 0;
    font-family: roboto slab, sans-serif;
    font-weight: 300;
    color: #0c0c0c;
    font-size: 14px;
  }
`;
