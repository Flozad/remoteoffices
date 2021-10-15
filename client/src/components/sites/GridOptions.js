import React, {useEffect, useContext, useState} from 'react';
import './body.scss'
import './searchBar.scss'
import Places from './Places.js'
import { PlacesContext } from '../../context/PlacesContext';
import { Link } from 'react-router-dom';
import JSONDATA from '../../assets/prueba.json'

function GridOptions() {

        const placesList = useContext(PlacesContext);
        const [searchTerm,setSearchTerm] = useState('');

        useEffect(() => {    
            placesList.updatePlaces()
            .then((places)=>console.log("A casa pete"))
        }, []);
        
        return (
        <div className='body'>
                <div>
                    <form className='form1' action="">
                    <input className='input1' type="text" placeholder="search..." onChange={e=>setSearchTerm(e.target.value)} />
                    <i className="fa fa-search"></i>
                    </form>
                </div>
                <Link to={'./qr'}>QR</Link>
                <div className="menu">
                    <button onClick={e=>setSearchTerm("$")}>Barato 🧾</button>
                    <button onClick={e=>setSearchTerm("$$")}>Promedio 💰</button>
                    <button onClick={e=>setSearchTerm("$$$")}>Lujoso 🤑</button>
                </div>
                
            <ul className='grid'>
            {JSONDATA.filter((val)=>{
                if(searchTerm === ""){
                return val
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
                }
                else if(val.city.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
                }
                else if(val.cost.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
                }

            }).map((val,key)=>{
                return <Places
                img = {val.img}
                    name = {val.name} 
                    city = {val.city} 
                    id = {val.id}
                    rating = {val.rating}
                >{val.name} </Places>
            })}
            
            
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