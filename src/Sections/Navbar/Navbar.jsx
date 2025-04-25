//Importamos los hooks de react
import React from 'react'

//Importamos los componentes
import NavItems from './NavItems'

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {
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
