import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(

    <Layout>
      <h1>Hi I am Subin</h1>
      <h2>Welcome to my blog on Front End Development</h2>

      <p> <Link to="/contact">Contact Me</Link> for freelancing work !! </p>
    </Layout>
    

  );
}

export default IndexPage;