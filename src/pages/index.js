import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import HeaderBody from '../components/headerBody'

const IndexPage = () => {
  return(

    <Layout>
      <Head title="Home"/>
      <HeaderBody/>
    </Layout>
  );
}

export default IndexPage;