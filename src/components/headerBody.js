import React from "react"
import {Link} from 'gatsby'
import headerBodyStyles from './styles/scss/headerBody.module.scss'
import header_hero from '../assets/header_hero.svg'

const headerBody = () => {

  return(
    <main className={headerBodyStyles.headerBody}>
      <div className={headerBodyStyles.imageDiv}>
       <img src={header_hero} alt="thinking about how to code"/>
      </div>
     
      <div className={headerBodyStyles.headerContent}>
        <h2>Front End Development made easier</h2>
        <p>Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.</p>
        <Link to="/blog">
          <button className={headerBodyStyles.cta}>Recent blog posts</button>
        </Link>
      </div>
    </main>
  );
}

export default headerBody;