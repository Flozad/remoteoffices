import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './body.scss'
import { GridItem } from './gridItem/GridItem';
import './places.scss'
import { ItemHeader } from './gridItem/ItemHeader'
import { PlacesContext } from '../../context/PlacesContext';

export function PlacesBox(props) {

    let id = useParams()
    const placesList = useContext(PlacesContext)
    const [placeSelected, setPlaceSelected] = useState({});

    useEffect(() => {
        filterPlacesFunction(id)
    }, []);
    
    const filterPlacesFunction = (id) => {
        const filtredPlace = null && placesList.places.data.filter(places => {
            console.log(places.id)
            return places.id === id.id
        })
        //setPlaceSelected(filtredPlace[0].data)
        //console.log(filtredPlace[0].data)
    }


    return (
                <div className='places'>
                    
                        <img className='imgItem' src= {placeSelected.img} alt= {placeSelected.nombre}></img>
                        <div>
                            <ItemHeader
                                city = {placeSelected.city}
                                country = {placeSelected.country}
                                name = {placeSelected.name}
                                ranking = {placeSelected.ranking}
                            />
                    <div className="gridContainer">
                        <GridItem
                                name = {placeSelected.name} 
                                city = {placeSelected.city} 
                                id = {placeSelected.id}               
                                type = {placeSelected.type}
                                wifi = {placeSelected.wifi}
                                lenguaje = {placeSelected.lenguaje}
                                food = {placeSelected.food}
                            />
                        </div>
                    </div>
                </div>
    );
}
