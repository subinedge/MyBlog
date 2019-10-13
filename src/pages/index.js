import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return(

    <Layout>
      <Head title="Home"/>
      <h1>Hi I am Subin</h1>
      <h2>Welcome to my blog on Front End Development</h2>

      <p> <Link to="/contact">Contact Me</Link> for freelancing work !! </p>
    </Layout>
    

  );
}

export default IndexPage;