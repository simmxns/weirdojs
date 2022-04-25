// @ts-check
const { GatsbyConfig } = require("gatsby");

/** @type {GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Weirdo JS`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        emitWarning: false,
        failOnError: false
      }
    }
  ]
};
