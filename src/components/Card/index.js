import React from 'react';
import { node, object, string } from 'prop-types';

import Title from '../Title';
import { styCardWrapper, styHeaderWrapper } from './styles';

function Card({ title, children, propOptions }) {
  return (
    <div css={styCardWrapper} {...propOptions}>
      {title && (
        <div css={styHeaderWrapper}>
          <Title text={title} />
        </div>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: string,
  children: node.isRequired,
  propOptions: object,
};

Card.defaultProps = {
  title: '',
  propOptions: {},
};

export default Card;
