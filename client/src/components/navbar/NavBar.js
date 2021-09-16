import './NavBar.scss'
import React from 'react';
import { useState } from 'react';
import Hamburger from "./hamburger";


function NavBar() {
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    } 

        return (
        <div>        
            <nav className='navbar'>
                <img className='navBarBackgroundImage' src='https://i.postimg.cc/tJ7Z470h/image.png' alt='coffee' />
                <img className='logo' src='https://i.postimg.cc/RFhmtsP6/logo512.png' alt='coffee' />
                <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </nav>
          
        </div>
    );
}

export default NavBar;