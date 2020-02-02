import React from 'react';
import { node } from 'prop-types';

import { container, timeline } from './styles';

function Timeline({ children }) {
  return (
    <div css={container}>
      <ul css={timeline}>{children}</ul>
    </div>
  );
}

Timeline.propTypes = {
  children: node.isRequired,
};

export default Timeline;
