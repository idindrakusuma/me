import React from 'react';
import { string } from 'prop-types';

import { name } from './styles';

function UserName({ fullName, title }) {
  return (
    <div css={name}>
      <h1>{fullName}</h1>
      <span>{title}</span>
    </div>
  );
}

UserName.propTypes = {
  fullName: string.isRequired,
  title: string.isRequired,
};

export default React.memo(UserName);
