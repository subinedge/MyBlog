const path = require("path")

// onCreateNode used to generate slug for posts which we accessed through graphql API, but now no need because we added a slug field in contentful

// module.exports.onCreateNode = ({node, actions}) => {

//   const {createNodeField} = actions

//   if(node.internal.type === "MarkdownRemark") {

//     const slug = path.basename(node.fileAbsolutePath, '.md')

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }

// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // dynamically generate pages
  // 1. get path to template
  // 2. get markdown data
  // 3. create new pages
}
