import React from 'react';
import { string } from 'prop-types';
import { Helmet } from 'react-helmet-async';

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

      <link
        rel="icon"
        href="https://user-images.githubusercontent.com/10141928/38850599-58f599aa-423c-11e8-82f8-8ea00ad5a364.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
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
