import { css } from '@emotion/core';
import ImgBackground from '@assets/indra-champion.png';

export const styWrapper = css`
  background: url(${ImgBackground});
  background-size: cover;

  padding: 60px 70px;
  position: relative;
  border-bottom: solid 1px #eee;
`;

export const styOverlay = css`
  background: rgba(12, 12, 12, 0.75);
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
`;

export const styContent = css`
  z-index: 1;
  position: relative;
`;

export const styDescription = css`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  color: #f1f1f1;
  font-family: 'Montserrat', sans-serif;

  h3 {
    font-size: 22px;
  }

  span {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`;
