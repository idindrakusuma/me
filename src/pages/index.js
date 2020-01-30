import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import Favicon from '@assets/favicon.png';
import Button from '@components/Button';
import Title from '@components/Title';
import Card from '@components/Card';
import Divider from '@components/Divider';

import { styNormalizer } from './styles';

/**
 * GraphQL Queries
 */
export const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        desription
      }
    }
  }
`;

function AppIndex({ data }) {
  const renderMetadata = () => {
    const metaData = data?.site?.siteMetadata || {};

    return (
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.siteUrl} />
        <link rel="icon" href={Favicon} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    );
  };

  return (
    <div css={styNormalizer}>
      {renderMetadata()}
      <h1>Hi, I&apos;m Indra Kusuma</h1>
      <Button label="Click Me" />
      <Title text="About me" margin="16px" />

      <Divider />
      <Card title="with title">Hello</Card>
    </div>
  );
}

AppIndex.propTypes = {
  data: object,
};

AppIndex.defaultProps = {
  data: {},
};

export default AppIndex;
