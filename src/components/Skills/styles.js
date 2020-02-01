import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const skillsInfo = css`
  margin: 30px 0;
  box-sizing: border-box;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 0;
    font-weight: 300;
  }

  span {
    font-family: 'Roboto Slab', serif;
    font-size: 12px;
    font-weight: 300;
    color: #9c9c9c;
  }
`;

export const clearFix = css`
  box-sizing: border-box;
  
  &:before {
    display: table,
    content: '',
  }

  &:after {
    clear: both;
  }
`;

export const pullLeft = css`
  float: left;
`;

export const pullRight = css`
  float: right;
`;

export const progress = css`
  height: 1px;
  margin: 20px 0;
  background-color: #e0e0e0;
  border-radius: 0;
`;

export const ProgressBar = styled.div`
  float: left;
  text-align: center;
  transition: width 0.6s ease;
  width: ${props => props.width}%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  background-color: #0c0c0c;
  box-shadow: none;
`;
