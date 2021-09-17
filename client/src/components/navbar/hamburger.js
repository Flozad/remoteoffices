import { Link } from 'react-router-dom'
import './hamburger.scss'


export default function Hamburger({ isOpen }){
    return(
        <>
            <div>
                <ul className='menu'>
                    <Link to={"./contacto"}>
                    <li className='menuItem'>Contacto</li>
                    </Link>
                    <Link to={"./cultura"}>
                    <li className='menuItem'>Cultura</li>
                    </Link>
                    <Link to={"./blog"}>
                    <li className='menuItem'>Blog</li>
                    </Link>
                </ul>
                <div className="hamburger">
                    <div className="burger burger1" />
                    <div className="burger burger2" />
                    <div className="burger burger3" />
                </div>
            </div>

            <style jsx>{`
                
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                .menu{ 
                    top: ${ isOpen ? '2vw' : '0'};
                    right: ${ isOpen ? '15vw' : '0'};
                    position: ${ isOpen ? 'relative' : '0'};
                    display: ${ isOpen ? 'block' : '0'};
                    text-align: ${ isOpen ? 'center' : '0'};
                } 
                .menuItem{ 
                    margin: ${ isOpen ? '3vw' : '0'};
                    color: ${ isOpen ? '#ffffff' : '0'};
                    font-weight: ${ isOpen ? '700' : '0'};
                    font-size: ${ isOpen ? '3vw' : '0'};
                    font-family: ${ isOpen ? 'Quattrocento, Serif' : '0'};
                    text-shadow: ${ isOpen ? '0px 2px 2px rgba(255, 255, 255, 0)' : '0'};
                    display: ${ isOpen ? 'inline' : '0'};
                    transition: ${ isOpen ? ' 1s' : '0'};
                } 
                
            `}</style>
        </>
    )
}