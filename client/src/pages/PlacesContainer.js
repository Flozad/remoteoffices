import React from 'react'
import { Helmet } from 'react-helmet';
import NavBar from '../components/navbar/NavBar.js'
import GridOptions from '../components/sites/GridOptions.js';
import { PlacesBox } from '../components/sites/PlacesBox';
import { Link } from 'react-router-dom';


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
      <Link to={'./'}>
      <NavBar/>
      <GridOptions />
      </Link>
      <div  className='placeContainer'>
        <PlacesBox />
      </div>
      
      
    </div>
  );
}

export default PlacesContainer;