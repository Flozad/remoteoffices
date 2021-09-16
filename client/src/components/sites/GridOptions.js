import React, {useEffect, useContext} from 'react';
import './body.scss'
import Places from './Places.js'
import { SearchBar } from './SearchBar';
import { PlacesContext } from '../../context/PlacesContext';

function GridOptions() {

        const placesList = useContext(PlacesContext);


        useEffect(() => {    
            placesList.updatePlaces()
            .then((places)=>console.log("A casa pete"))
        }, []);
        
        return (
        <div className='body'>
            <div className='ubicacion'>Buenos Aires, Argentina</div>  
            <div className='topBar'>
                <div className='slogan'>Hacela NUESTRA oficina</div>
                <SearchBar/>
            </div>          
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
        </div>
    );
}

export default GridOptions;