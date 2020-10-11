require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Tomás Freire Knight - Web Developer`,
    description: `Tomás Freire Knight's Portfolio Site.`,
    author: `Tomás Freire Knight`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // head: true,
        anonymize: true,
      },
    },
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
    {
      // The name of the plugin
      resolve: "gatsby-source-mongodb",
      options: {
        // Name of the database and collection where are books reside
        dbName: "portfolio-site",
        collection: "messages",
        server: {
          address: "cluster0-shard-00-01.damdm.mongodb.net",
          port: 27017,
        },
        auth: {
          user: "tomasfrancizco",
          password: "C61%21%23Hf9",
        },
        extraParams: {
          replicaSet: "Main-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
}
