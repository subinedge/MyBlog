module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "xxxxxxx",
    author: "Subin"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    "gatsby-plugin-sass",
    // this plugin will pull all the files in our project system
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
        icon: `../src/images/favicon-32x32.png`
      }
    },
    "gatsby-plugin-sharp",
    // REMARK plugin needed to extract the markdown files and parses
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "xxx",
        short_name: "xxxx",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./static/favicon.ico" // This path is relative to the root of the site.
      }
    }
  ]
};