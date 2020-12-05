require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Airtable`,
    description: `Gatsby Airtable`,
    author: `Andreea Macoveiciuc`,
    siteUrl: `https://festive-kepler-9d8952.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Airtable`,
        short_name: `Gatsby Airtable`,
        start_url: `https://festive-kepler-9d8952.netlify.app/`,
        display: `minimal-ui`,
        icon: `./static/favicon.ico`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: `${process.env.AIRTABLE_API}`, 
    //     concurrency: 5, 
    //     tables: [
    //       {
    //         baseId: `appWZOog67McA97vM`,
    //         tableName: `Main`,
    //         tableView: `Grid View`,
    //         separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
    //         separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
    //       },
    //     ]
    //   }
    // }
  ],
}
