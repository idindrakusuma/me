/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /**
   * My configuration for Meta Data
   */
  siteMetadata: {
    title: "Hi, I'm Indra!",
    siteUrl: 'https://indrakusuma.web.id/me',
    desription:
      "Hi, My name is Indra Kusuma. Currently, I work at Tokopedia as Software Engineer Web Platform. I'm very passionate in Web Development. Don't be shy to say hi to me! because, maybe we can work do something good in the future! :D",
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-emotion',
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
  ],
};
