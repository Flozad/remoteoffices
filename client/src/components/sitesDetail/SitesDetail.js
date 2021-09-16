
import './body.scss'
import React from 'react';

function SitesDetail(props) {
    return (
       
        <li className = 'item'>
            
            <div >
                <img className='placeImg' src = {props.img} alt = {props.name}/>
                <h3 class="city">{props.city}</h3>
                <div className='title'>
                    <h2 class="name" itemprop="name">{props.name}</h2>
                    <h3 class="ranking">{props.id}</h3>
                </div>
                
            </div>
        
        </li>
    
    
    );
};

export default SitesDetail;
