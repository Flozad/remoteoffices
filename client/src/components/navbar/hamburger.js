import './hamburger.scss'


export default function Hamburger({ isOpen }){
    return(
        <>
            <div>
                <ul className='menu'>
                    <li className='menuItem'>Contacto</li>
                    <li className='menuItem'>Cultura</li>
                    <li className='menuItem'>Blog</li>
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
                    top: ${ isOpen ? '2.7vw' : '0'};
                    right: ${ isOpen ? '10vw' : '0'};
                    position: ${ isOpen ? 'relative' : '0'};
                    display: ${ isOpen ? 'block' : '0'};
                    text-align: ${ isOpen ? 'center' : '0'};
                } 
                .menuItem{ 
                    margin: ${ isOpen ? '3vw' : '0'};
                    color: ${ isOpen ? '#212427' : '0'};
                    font-weight: ${ isOpen ? '500' : '0'};
                    font-size: ${ isOpen ? '3vw' : '0'};
                    font-family: ${ isOpen ? 'roboto' : '0'};
                    margin-top: ${ isOpen ? '-0.3vw' : '0'};
                    text-shadow: ${ isOpen ? '0px 2px 2px rgba(255, 255, 255, 0)' : '0'};
                    display: ${ isOpen ? 'inline' : '0'};
                    transition: ${ isOpen ? ' 0.3s' : '0'};
                } 
                
            `}</style>
        </>
    )
}