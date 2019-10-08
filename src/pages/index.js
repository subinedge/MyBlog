import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => {
  return(
    <div>
      <Header/>
      <h1>Hi I am Subin</h1>
      <h2>Welcome to my blog on Front End Development</h2>

      {/* old way to link between pages, as this will reload entire page onclick

      <p> <a href="/contact">Contact Me</a> for freelancing work !! </p> */}

      {/* importing link and using it will not refresh the page */}

      <p> <Link to="/contact">Contact Me</Link> for freelancing work !! </p>
      <Footer />
    </div>
  );
}

export default IndexPage;