import React from 'react';
import { node, string } from 'prop-types';

import Title from '../Title';
import { styCardWrapper, styHeaderWrapper } from './styles';

function Card({ title, children, ...rest }) {
  return (
    <div css={styCardWrapper} {...rest}>
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
};

Card.defaultProps = {
  title: '',
};

export default Card;
