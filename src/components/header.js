import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

import headerStyles from './styles/scss/header.module.scss'

const Header = ()=> {

  const siteHeading = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `);

  return (

    <header className = {headerStyles.header}>
      <h1 className={headerStyles.heading}>
        <Link 
        className = {headerStyles.title} to="/">
          JSWillRule
        </Link>
      </h1>
      <nav>
        <ul className = {headerStyles.navList}>
          <li><Link to="/" className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
          <li><Link to="/blog" className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
          <li><Link to="/about" className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
          <li><Link to="/contact" className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;