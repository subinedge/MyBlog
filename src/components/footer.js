import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = ()=> {
  const authorName = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      Created by {authorName.site.siteMetadata.author} &copy; 2019
    </footer>
  );
}

export default Footer;