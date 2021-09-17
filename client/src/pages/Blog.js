import React from 'react'
import NavBar from '../components/navbar/NavBar.js'
import {Helmet} from "react-helmet";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog - RemoteOffices</title>
        <meta name="description" content="{smallText}"  />
        <link href="../../assets/logo.png" rel="Logo"/>
        <link href="../../assets/logo.png" rel="icon"/>
      </Helmet>
      <NavBar/>
    </div>
  );
}

export default Blog;