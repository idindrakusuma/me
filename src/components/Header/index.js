import React from 'react';
import { Helmet } from 'react-helmet-async';

import Favicon from '@assets/favicon.png';
import { string } from 'prop-types';

const DESC =
  'Hello! My name is Indra Kusuma. I am an optimistic and type of person of learn by doing who have an interest in Software Engineering, specifically about Web Development.';

function Header({ title }) {
  const finalTitle = `${title} | Indra Kusuma Profile Page 😎`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={DESC} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={finalTitle} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:url" content="http://indrakusuma.web.id/me" />
      <meta property="og:description" content={DESC} />

      <link rel="icon" href={Favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

Header.propTypes = {
  title: string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
