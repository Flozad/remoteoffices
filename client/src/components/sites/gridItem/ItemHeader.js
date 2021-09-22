import React from 'react';
import '../body.scss'

export function ItemHeader(props) {

    return (
        <div>
            <div className='headerText'>
                <h2 className='placesSubTitle'>{props.city}, {props.country}</h2>
                <h1 className='placesTitle' >{props.name}</h1>
                <h3 className='rankingItem'>{props.ranking}</h3>
            </div>
        </div>
    );
}


