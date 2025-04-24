import React from 'react'

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='contenedor-izquierda'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>Inicio</li>
                    <li className='navbar-item'>Sobre mí</li>
                    <li className='navbar-item'>Contacto</li>
                </ul>
            </div>

            <div className='contenedor-derecha'>
                <h1 className='navbar-title'>Mi Portafolio</h1>
            </div>
        </header >
    )
}

export default Navbar
