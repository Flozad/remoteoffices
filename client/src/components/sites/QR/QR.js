import React from "react";
import './qr.scss'

export function QR() {

  const loadData = (i) => {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("get", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTf-Ka7FNCYkNOublO3Qd89VekAw5v7Uu9gR2_7snU5B36AMdk14sBein0GUvB3doXA0Hrvh2iTDFW0/pub?output=csv", true);
    xhttp.send();

    xhttp.onload = function(e){
      if (xhttp.readyState === 4 && xhttp.status === 200){
        var menu = [].splice()
        var menu = xhttp.responseText
        

        var header = menu.split(/\s+/)

        console.log(header);

        
        document.getElementById("items" + 1).innerHTML = header[1].split(",")[0]
        document.getElementById("items" + 2).innerHTML = header[2].split(",")[0]
        document.getElementById("items" + 3).innerHTML = header[3].split(",")[0]
        document.getElementById("items" + 4).innerHTML = header[4].split(",")[0]
        document.getElementById("items" + 5).innerHTML = header[5].split(",")[0]

        document.getElementById("price" + 1).innerHTML = header[1].split(",")[1]
        document.getElementById("price" + 2).innerHTML = header[2].split(",")[1]
        document.getElementById("price" + 3).innerHTML = header[3].split(",")[1]
        document.getElementById("price" + 4).innerHTML = header[4].split(",")[1]
        document.getElementById("price" + 5).innerHTML = header[5].split(",")[1]
        
      }
    }   
  }

    return (
  <ul>
  
    <div class="container">
      <div class="group-header">
        <span>12 oz.</span>
        <span>34 oz.</span>
      </div>
      
      <h3>
        <span id="items1">{loadData(1)}</span>
        <div id='price1' className='price'>56</div>
      </h3>
      <p>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
      <h3>
        <span id="items2">{loadData(2)}</span>
        <div id='price2' className='price'>56</div>
      </h3>
      <p>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
      <h3>
        <span id="items3">{loadData(3)}</span>
        <div id='price3' className='price'>56</div>
      </h3>
      <p>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
       <h3>
        <span id="items4">{loadData(4)}</span>
        <div id='price4' className='price'>56</div>
      </h3>
      <p>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
       <h3>
        <span id="items5">{loadData(5)}</span>
        <div id='price5' className='price'>56</div>
      </h3>
      <p>A well-written, appetite inspiring description that aims to inform the information and food deprived consumer</p>
    </div>
  </ul>
);
}


export default QR;