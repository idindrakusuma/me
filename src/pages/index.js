import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import Button from '../components/Button';

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
    const metaData = data.site.siteMetadata || {};

    return (
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.siteUrl} />
      </Helmet>
    );
  };

  return (
    <div>
      {renderMetadata()}
      <h1>Hi, I&apos;m Indra Kusuma</h1>
      <Button label="Click Me" />
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
