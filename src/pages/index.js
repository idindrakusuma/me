import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet-async"

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
`

function AppIndex({ data }) {
  const renderMetadata = () => {
    const metaData = data.site.siteMetadata || {}

    return (
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.siteUrl}></meta>
      </Helmet>
    )
  }

  return (
    <div>
      {renderMetadata()}
      <h1>Hi, I'm Indra Kusuma</h1>
    </div>
  )
}

export default AppIndex
