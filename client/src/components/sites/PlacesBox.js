import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './body.scss'
import { GridItem } from './gridItem/GridItem';
import './places.scss'
import { ItemHeader } from './gridItem/ItemHeader'
import axios from 'axios'

export function PlacesBox(props) {

    let id = useParams()
    const [placesList, setPlacesList] = useState([])
    const [placeSelected, setPlaceSelected] = useState({
        img: 'https://i.postimg.cc/qMxCfX5N/coffe-shop.jpg', 
        name: 'Lobo',
        city: 'Buenos Aires',
        country: 'Argentina',
        id: '2',
        ranking: '7.0',
        wifi: 'cheto',
        lenguaje: 'Espanol',
        food: '7'
    });

    useEffect(() => {
        // axios.get('http://localhost:8080/api/places')
        //     .then(res => {
        //         const places = res.data;
        //         console.log(places.data)
        //         setPlacesList(places.data)
                filterPlacesFunction(id)
        //     })
    }, []);

    const filterPlacesFunction = (id) => {
        const filtredPlace = placesList.filter(places => {
            console.log(places.id)
            return places.id === id.id
        })
        setPlaceSelected(filtredPlace)
        console.log(filtredPlace)
    }


    return (
            <div className='blurBack'>
                <div className='places'>
                <img className='imgItem' src= {placeSelected.img} alt= {placeSelected.nombre}></img>
                <div>
                    <ItemHeader
                        city = {placeSelected.city}
                        country = {placeSelected.country}
                        name = {placeSelected.name}
                        ranking = {placeSelected.ranking}
                    />
              
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
