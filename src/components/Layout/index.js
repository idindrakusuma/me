import React, { useState, useEffect } from 'react';
import { string, node } from 'prop-types';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

import socialMediaData from '@/api/socialMediaData';
import listMenuData from '@/api/listMenuData';

import { Wrapper, MainPanel, WrapperBody } from './styles';

const MINIMUM_VALUE = 1023;

function Layout({ title, children }) {
  const [isShowWidth, setIsShowWidth] = useState(true);

  const updateWidth = () => {
    if (window.innerWidth > MINIMUM_VALUE) {
      setIsShowWidth(true);
    } else {
      setIsShowWidth(false);
    }
  };

  useEffect(() => {
    updateWidth();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <WrapperBody>
      <Header title={title} />
      <Wrapper>
        {isShowWidth && <Sidebar socialMediaData={socialMediaData} listMenu={listMenuData} />}
        <MainPanel>{children}</MainPanel>
      </Wrapper>
    </WrapperBody>
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
