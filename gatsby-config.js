const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Tomás Freire Knight`,
    description: `Tomás Freire Knight's Portfolio Site.`,
    author: `Tomás Freire Knight`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `237494515`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
  ],
}
