import React from 'react'

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='contenedor-izquierda'>
        <h1 className='navbar__title'>Mi Portafolio</h1>
      </div>

      <div className='contenedor-derecha'>
        <ul className='navbar__list'>
          <li className='navbar__item'>Inicio</li>
          <li className='navbar__item'>Sobre mí</li>
          <li className='navbar__item'>Proyectos</li>
          <li className='navbar__item'>Contacto</li>
        </ul>
      </div>
    </header >
  )
}

export default Navbar
