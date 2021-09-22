import './NavBar.scss'
import React from 'react';
import { useState } from 'react';
import Hamburger from "./hamburger";
import afuera from "../../assets/bakery.jpg"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';


function NavBar() {
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    } 

        return (
        <div>        
            <nav className='navbar'>
                <img className='navBarBackgroundImage' src={afuera} alt='coffee' />
                <div className="header"></div>
                <Link to={"./"}><img className='logo' src={logo} alt='coffee' /></Link>
                <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
                </div>
                  
            <div className='topBar'>
                <span className='slogan'>Hacela <br/> NUESTRA oficina</span>
                <div className='ubicacion'>Buenos Aires, Argentina</div>
                {/* <SearchBar/> */}
                <div className="container-chevron">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>   
            </nav>
          
        </div>
    );
}

export default NavBar;