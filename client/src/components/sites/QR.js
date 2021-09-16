import React from 'react';
import './body.scss'
import { Papa } from 'papaparse';


export function QR() {

    var public_spreadsheet_url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTf-Ka7FNCYkNOublO3Qd89VekAw5v7Uu9gR2_7snU5B36AMdk14sBein0GUvB3doXA0Hrvh2iTDFW0/pub?output=csv'

    function init() {
        Papa.parse(public_spreadsheet_url, {
        download: true,
        header: true,
        complete: showInfo,
    })
    }

    window.addEventListener('DOMContentLoaded', init)

    function showInfo(results) {
    var data = results.data

    //SECTIONS
    for (let g = 0; g < data?.length; g++) {
        var menu = data[g].t1
       

        var auxiliar = menu
        document.getElementById('menu').appendChild(auxiliar)

    }
    }

    window.addEventListener('DOMContentLoaded', showInfo)

 
        return (
                <div>
                    ssssss
                    <div id = 'menu'>
                    
                    </div>
                </div>
    );
}


