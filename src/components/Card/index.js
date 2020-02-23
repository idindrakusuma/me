import React from 'react';
import { node, string } from 'prop-types';

import Title from '../Title';
import { styCardWrapper, styHeaderWrapper } from './styles';

function Card({ title, children, titleTestId, ...rest }) {
  return (
    <div css={styCardWrapper} {...rest}>
      {title && (
        <div css={styHeaderWrapper}>
          <Title text={title} data-testid={titleTestId} />
        </div>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: string,
  titleTestId: string,
  children: node.isRequired,
};

Card.defaultProps = {
  title: '',
  titleTestId: '',
};

export default Card;
