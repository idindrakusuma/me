import React from 'react';
import { string, node, bool } from 'prop-types';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

import socialMediaData from '@/api/socialMediaData';
import listMenuData from '@/api/listMenuData';

import { Wrapper, MainPanel, WrapperBody } from './styles';

function Layout({ title, children, noWave }) {
  return (
    <WrapperBody>
      <Header title={title} />
      <Wrapper>
        <Sidebar socialMediaData={socialMediaData} listMenu={listMenuData} />
        <MainPanel noWave={noWave}>{children}</MainPanel>
      </Wrapper>
    </WrapperBody>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  title: string,
  noWave: bool,
};

Layout.defaultProps = {
  title: '',
  noWave: true,
};

export default Layout;
