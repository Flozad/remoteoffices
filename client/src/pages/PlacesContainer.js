import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import NavBar from '../components/navbar/NavBar.js'
import GridOptions from '../components/sites/GridOptions.js';
import { PlacesBox } from '../components/sites/PlacesBox';

function PlacesContainer() {

  const place = [
    {
      img: 'https://i.postimg.cc/qMxCfX5N/coffe-shop.jpg', 
      name: 'Lobo',
      city: 'Buenos Aires, Argentina',
      id: '2',
    }
  ]

  return (
    <div>
      <Helmet>
        <title>{place[0].name}</title>
        <meta name="description" content="{smallText}"  />
      </Helmet>
      <Link to ={`/`} >
      <NavBar/>
      <GridOptions/>
      </Link>
      <div  className='placeContainer'>
        <PlacesBox 
        img = {place[0].img}
        name = {place[0].name} 
        city = {place[0].city} 
        id = {place[0].id} 
        />
      </div>
      
      
    </div>
  );
}

export default PlacesContainer;