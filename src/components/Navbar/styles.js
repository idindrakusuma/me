import { css } from '@emotion/core';
import { SIDEBAR_OFF } from '@/constants/screen';

export const styWrapper = css`
  bottom: 0rem;
  right: 0rem;
  left: 0rem;
  position: fixed;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.985);
  border-top-style: solid;
  border-top-width: 1px;
  padding: 16px 0;
  display: none;
  font-size: 20px;

  a {
    color: #0c0c0c;
  }

  .active {
    color: #0199ff;
  }

  @media screen and (max-width: ${SIDEBAR_OFF}) {
    display: flex;
    justify-content: space-around;
  }
`;
