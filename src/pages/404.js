import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = ()=> {
  return(
    <Layout>
      <Head title="404"/>
      <h1>Page Not found</h1>
      <p><Link to="/">Go to home Page</Link></p>
    </Layout>
  )
}

export default NotFound