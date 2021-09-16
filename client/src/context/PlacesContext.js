import  React, {useState, createContext} from 'react';
import axios from 'axios'

export const PlacesContext = createContext([]);

export const PlacesProvider = ({children}) => {

    const[places, setPlaces] = useState([])

    const updatePlaces = () =>{
        return axios.get('http://localhost:8080/api/places')
        .then(res => {
            const places = res.data;
            console.log(places.data)
            setPlaces(places)
        })
    }

    return(
        <PlacesContext.Provider value = {
            {
            places,
            updatePlaces
            }
        }>
            {children}
        </PlacesContext.Provider>
        
    );

}

export default PlacesProvider