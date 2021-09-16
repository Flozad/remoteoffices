import React from 'react'
import NavBar from '../components/navbar/NavBar.js'
import GridOptions from '../components/sites/GridOptions'
import {Helmet} from "react-helmet";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="{smallText}"  />
      </Helmet>
      <NavBar/>
      <GridOptions/>
    </div>
  );
}

export default HomePage;