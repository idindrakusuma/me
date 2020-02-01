import React from 'react';
import { object, string, arrayOf } from 'prop-types';

import IndraKusumaProfilePhoto from '@assets/indrakusuma.jpg';

import ListMenu from './ListMenu';
import { avatar, name, socialMedia, copyright, wrapper } from './styles';

function Sidebar({ copyrightText, fullName, listMenu, socialMediaData, title }) {
  const renderPhotoProfile = () => {
    return (
      <div css={avatar}>
        <img src={IndraKusumaProfilePhoto} alt="Indra Kusuma" />
      </div>
    );
  };

  const renderName = () => {
    return (
      <div css={name}>
        <h1>{fullName}</h1>
        <span>{title}</span>
      </div>
    );
  };

  const renderSocialMedia = () => {
    if (!socialMediaData) {
      return null;
    }

    return (
      <div css={socialMedia}>
        <ul>
          {socialMediaData.map((element, index) => (
            <li key={index}>
              <a href={element.href} target="_blank" rel="noopener noreferrer" title={element.title}>
                <element.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderCopyRight = () => {
    return (
      <div css={copyright}>
        {!copyrightText ? <span>{`© ${new Date().getFullYear()} Indra Kusuma`}</span> : <span>{copyrightText}</span>}
      </div>
    );
  };

  return (
    <div css={wrapper}>
      {renderPhotoProfile()}
      {renderName()}
      {renderSocialMedia()}
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

export default Sidebar;
