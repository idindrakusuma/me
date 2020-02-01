/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/me',
  /**
   * My configuration for Meta Data
   */
  siteMetadata: {
    title: 'Indra Kusuma personal page',
    siteUrl: 'https://indrakusuma.web.id/me',
    desription:
      "Hi, My name is Indra Kusuma. Currently, I work at Tokopedia as Software Engineer Web Platform. I'm very passionate in Web Development. Don't be shy to say hi to me! because, maybe we can work do something good in the future! :D",
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-emotion',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    /**
     * Custom config for ESLint
     */
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    /**
     * Custom resolver for our modules
     */
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@helpers': 'src/helpers',
          '@pages': 'src/pages',
          '@assets': 'src/assets',
          '@': 'src',
        },
      },
    },
  ],
};
