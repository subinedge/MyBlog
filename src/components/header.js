import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import ToggleButton from "./SideDrawer/DrawerToggleButton"

import headerStyles from "./styles/scss/header.module.scss"
import logo from "../assets/logo.png"

const Header = props => {
  const siteHeading = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.navBar}>
      <nav className={headerStyles.navBar__navigation}>
        {/* hamburger menu */}
        <div>
          <ToggleButton click={props.drawClickHandler} />
        </div>

        {/* logo */}
        <div className={headerStyles.navBar__logo}>
          {/* <Link className={headerStyles.navBar__logoLinks} to="/"> The LOGO </Link> */}
          <Link className={headerStyles.navBar__logoLinks} to="/">
            <img className={headerStyles.logo} src={logo} alt="logo" />
          </Link>
        </div>

        <div className={headerStyles.spacer}></div>

        <div className={headerStyles.navBar__navigationItems}>
          <ul>
            <li>
              <Link
                to="/"
                className={headerStyles.item}
                activeClassName={headerStyles.activeNavItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={headerStyles.item}
                activeClassName={headerStyles.activeNavItem}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={headerStyles.item}
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={headerStyles.item}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
