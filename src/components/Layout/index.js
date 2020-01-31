import React from 'react';
import { string, node } from 'prop-types';

import Header from '@components/Header';
import { styNormalizer } from './styles';

function Layout({ title, children }) {
  return (
    <>
      <Header title={title} />
      <div css={styNormalizer}>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  title: string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
