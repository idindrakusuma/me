import React from 'react';
import { string, node, bool } from 'prop-types';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';

import socialMediaData from '@/api/socialMediaData';
import listMenuData from '@/api/listMenuData';

/**
 * Import global styles to define default value
 */
import './styles.css';
import { Wrapper, MainPanel, WrapperBody } from './styles';

function Layout({ title, children, noWave, centerContent }) {
  return (
    <WrapperBody>
      <Header title={title} />
      <Wrapper>
        <Navbar listMenu={listMenuData} />
        <Sidebar socialMediaData={socialMediaData} listMenu={listMenuData} />
        <MainPanel noWave={noWave} centerContent={centerContent}>
          {children}
        </MainPanel>
      </Wrapper>
    </WrapperBody>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  title: string,
  noWave: bool,
  centerContent: bool,
};

Layout.defaultProps = {
  title: '',
  noWave: true,
  centerContent: false,
};

export default Layout;
