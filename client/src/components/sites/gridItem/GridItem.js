import React from 'react';
import '../body.scss'

export function GridItem(props) {

    return (
        
        <div className='gridItems'>
            {
            Object.keys(props).map(function(key) {
                return (
                <div className='items'>
                    <h3 className='itemsText'>
                    {key}
                    </h3>
                    <div className='roundedRectangle'>
                        <i class="fa fa-coffee"></i>
                        <div>{props[key]}</div>
                    </div>
                </div>
                )
            })
            }
        
       </div>
    );
}




