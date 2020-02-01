import React from 'react';
import { object, string, arrayOf } from 'prop-types';

import IndraKusumaProfilePhoto from '@assets/indra-new.jpg';
import ListMenu from './ListMenu';
import UserName from './UserName';
import ImageProfile from './ImageProfile';
import ListSocialMedia from './ListSocialMedia';

import { copyright, wrapper } from './styles';

function Sidebar({ copyrightText, fullName, listMenu, socialMediaData, title }) {
  const renderCopyRight = () => {
    return (
      <div css={copyright}>
        {!copyrightText ? <span>{`© ${new Date().getFullYear()} Indra Kusuma`}</span> : <span>{copyrightText}</span>}
      </div>
    );
  };

  return (
    <div css={wrapper}>
      <ImageProfile urlPhoto={IndraKusumaProfilePhoto} />
      <UserName title={title} fullName={fullName} />
      <ListSocialMedia socialMediaData={socialMediaData} />
      <ListMenu listMenu={listMenu} />
      {renderCopyRight()}
    </div>
  );
}

Sidebar.propTypes = {
  copyrightText: string,
  fullName: string,
  listMenu: arrayOf(object),
  socialMediaData: arrayOf(object),
  title: string,
};

Sidebar.defaultProps = {
  copyrightText: '',
  fullName: 'Indra Kusuma',
  listMenu: [],
  socialMediaData: [],
  title: 'Professional Web Developer',
};

export default React.memo(Sidebar);
