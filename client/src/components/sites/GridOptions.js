import React, {useEffect, useContext} from 'react';
import './body.scss'
import Places from './Places.js'
import { PlacesContext } from '../../context/PlacesContext';
import { Link } from 'react-router-dom';

function GridOptions() {

        const placesList = useContext(PlacesContext);


        useEffect(() => {    
            placesList.updatePlaces()
            .then((places)=>console.log("A casa pete"))
        }, []);
        
        return (
        <div className='body'>       
            <ul className='grid'>
            {
                placesList.places.data !== undefined ? placesList.places.data.map((place) => (
                <Places
                    img = {place.data.img}
                    name = {place.data.name} 
                    city = {place.data.city} 
                    id = {place.id}
                    rating = {place.data.rating}
                />
            )): <div></div>}
            </ul>
            <Link to={"./"}>
                <div className="to-top">Subir</div>
            </Link>
        </div>
    );
}

export default GridOptions;