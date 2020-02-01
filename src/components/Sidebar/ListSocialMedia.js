import React from 'react';
import { arrayOf, object } from 'prop-types';

import { socialMedia } from './styles';

function ListSocialMedia({ socialMediaData }) {
  if (!socialMediaData) {
    return null;
  }

  return (
    <div css={socialMedia}>
      <ul>
        {socialMediaData.map((element, index) => (
          <li key={index}>
            <a href={element.href} target="_blank" rel="noopener noreferrer" title={element.title}>
              <element.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListSocialMedia.propTypes = {
  socialMediaData: arrayOf(object),
};

ListSocialMedia.defaultProps = {
  socialMediaData: [],
};

export default React.memo(ListSocialMedia);
