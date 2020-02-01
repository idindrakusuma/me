import React from 'react';
import { string, number } from 'prop-types';

import { pullLeft, pullRight, skillsInfo, clearFix, progress, ProgressBar } from './styles';

function Skills({ title, ability }) {
  return (
    <>
      <div css={[skillsInfo, clearFix]}>
        <h3 css={pullLeft}>{title}</h3>
        <span css={pullRight}>{ability}%</span>
      </div>
      <br />
      <div css={progress}>
        <ProgressBar width={ability} role="progressbar" aria-valuenow={ability} aria-valuemin={0} aria-valuemax={100} />
      </div>
    </>
  );
}

Skills.propTypes = {
  title: string.isRequired,
  ability: number.isRequired,
};

export default React.memo(Skills);
