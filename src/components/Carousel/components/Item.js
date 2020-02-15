import React from 'react';
import { string } from 'prop-types';

import { styItemWrapper, styItemImage, styTextWrapper } from '../styles';
import { ITEM_ID } from '../constants';

function CarouselItem({ title, imgUrl, text, author }) {
  return (
    <div className={`${ITEM_ID} fade`}>
      <div css={styItemWrapper}>
        <div css={styItemImage}>
          <img src={imgUrl} alt={author} loading="lazy" />
        </div>
        <div css={styTextWrapper}>
          <p dangerouslySetInnerHTML={{ __html: `"${text}"` }} />
          <span className="name">{author} /</span>
          <span className="title">{title}</span>
        </div>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  title: string.isRequired,
  imgUrl: string.isRequired,
  text: string.isRequired,
  author: string.isRequired,
};

export default React.memo(CarouselItem);
