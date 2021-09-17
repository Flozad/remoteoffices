import React from 'react'
import NavBar from '../components/navbar/NavBar.js'
import GridOptions from '../components/sites/GridOptions'
import {Helmet} from "react-helmet";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>RemoteOffices</title>
        <meta name="description" content="{smallText}"  />
        <link href="../../assets/logo.png" rel="Logo"/>
        <link href="../../assets/logo.png" rel="icon"/>
      </Helmet>
      <NavBar/>
      <GridOptions/>
    </div>
  );
}

export default HomePage;