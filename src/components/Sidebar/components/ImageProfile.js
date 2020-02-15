import React from 'react';
import { string } from 'prop-types';
import { avatar } from '../styles';

function ImageProfile({ urlPhoto }) {
  return (
    <div css={avatar}>
      <img src={urlPhoto} loading="lazy" alt="Indra Kusuma" />
    </div>
  );
}

ImageProfile.propTypes = {
  urlPhoto: string.isRequired,
};

export default React.memo(ImageProfile);
