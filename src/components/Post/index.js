import React from 'react';
import { string } from 'prop-types';

import Button from '@components/Button';
import Divider from '@components/Divider';
import { styWrapper } from './styles';

const getFinalDesc = text => {
  if (text.length < 170) return text;

  return `${text.substring(0, 170)}...`;
};

function Post({ title, desc, link }) {
  const handleClickReadmore = () => {
    window.location.href = link;
  };

  return (
    <div css={styWrapper}>
      <h3 onClick={handleClickReadmore} role="presentation">
        {title}
      </h3>
      <div className="description">{getFinalDesc(desc)}</div>
      <div>
        <Button label="Read more" small onClick={handleClickReadmore}>
          Read more
        </Button>
      </div>
      <Divider />
    </div>
  );
}

Post.propTypes = {
  title: string.isRequired,
  desc: string.isRequired,
  link: string.isRequired,
};

export default React.memo(Post);
