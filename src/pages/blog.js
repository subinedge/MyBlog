import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const blogHeader = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1 className={blogStyles.header}>My Blog Posts</h1>
      <ol className={blogStyles.posts}>
        {blogHeader.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                {/* <p className={blogStyles.excerpt}>{edge.node.excerpt}</p> */}
                <p className={blogStyles.date}>{edge.node.publishedDate}</p>
                {/* <p className={blogStyles.date}>&bull;<span className={blogStyles.space}></span>{edge.node.timeToRead}min Read</p> */}
              </Link>
              <div className={blogStyles.divider}></div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;