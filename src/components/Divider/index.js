import React from 'react';
import { css } from '@emotion/core';

const styles = css`
  border: solid 0.5px #eee;
`;

function Divider() {
  return <hr css={styles} />;
}

export default Divider;
