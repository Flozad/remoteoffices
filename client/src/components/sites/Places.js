import './body.scss'
import React from 'react';
import {Link} from 'react-router-dom'

function Places(props) {
    return (
       
        <li className = 'item'>
            <Link to ={`/${props.id}`} >
                <div >
                    <img className='placeImg' src = {props.img} alt = {props.name}/>
                    
                    <div className='title'>
                        <h3 className="city">{props.city}</h3>
                        <h3 className="ranking">{props.rating}</h3>
                    </div>
                    <h2 className="name" itemProp="name">{props.name}</h2>
                    
                </div> 
                
            </Link>
            
        </li>
    
    
    );
};

export default Places;