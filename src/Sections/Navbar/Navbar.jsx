//Importamos los hooks de react
import React, { useEffect } from 'react'
import { scroller } from 'react-scroll'; // Importamos scroller de react-scroll

//Importamos los componentes
import NavItems from '../../Components/NavItems'

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {

    //Ponemos offset en 1 para que se carge la active class de primeras
    useEffect(() => {
        scroller.scrollTo('inicio', {
            duration: 0,  
            delay: 0,
            smooth: false, 
            offset: 1, 
        });
    }, []);

    return (
        <header className='navbar'>
            <NavItems language="es" />

            <div className='contenedor-derecha'>
                <h1 className='navbar-title'>Mi Portafolio</h1>
            </div>
        </header >
    )
}

export default Navbar
