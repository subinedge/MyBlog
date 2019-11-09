import React from 'react'
import {Link} from 'gatsby'

import '../styles/scss/sideDrawer.scss'

const SideDrawer = props => {
  
  let drawerClasses = 'sideNav';
  if(props.show) {
    drawerClasses = 'sideNav open'
  }

  return (
  <nav className={drawerClasses}>
    <ul>
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/blog" className="link">Blog</Link></li>
      <li><Link to="/about" className="link">About</Link></li>
      <li><Link to="/contact" className="link">Contact</Link></li>
    </ul>
  </nav>
  )
};  

export default SideDrawer;