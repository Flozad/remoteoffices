import React from 'react'
import NavBar from '../components/navbar/NavBar.js'
import {Helmet} from "react-helmet";

function Cultura() {
  return (
    <div>
      <Helmet>
        <title>Cultura - RemoteOffices</title>
        <meta name="description" content="{smallText}"  />
        <link href="../../assets/logo512C.png" rel="Logo"/>
        <link href="../../assets/logo512C.png" rel="icon"/>
      </Helmet>
      <NavBar/>
    </div>
  );
}

export default Cultura;