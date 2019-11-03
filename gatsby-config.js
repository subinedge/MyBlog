/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ThinkJavascript",
    author: "Subin"
  },
  plugins:[
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    // this plugin will pull all the files in our project system
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    // REMARK plugin needed to extract the markdown files and parses
    {
      resolve: 'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesOriginal: false
            }
          }
        ]
      }
    }

  ]
}
