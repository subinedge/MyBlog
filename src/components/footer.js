import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './styles/scss/footer.module.scss'

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
    <footer className = {footerStyles.footer}>
      Created by {authorName.site.siteMetadata.author} &copy; 2019
    </footer>
  );
}

export default Footer;