import React from 'react'

//Importamos los hooks de react
import { Link } from 'react-scroll'

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='contenedor-izquierda'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>
                        <Link
                            to="inicio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="activo"
                            className="navbar-enlace"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link
                            to="sobremi"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="activo"
                            className="navbar-enlace"
                        >
                            Sobre mí
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="activo"
                            className="navbar-enlace"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='contenedor-derecha'>
                <h1 className='navbar-title'>Mi Portafolio</h1>
            </div>
        </header >
    )
}

export default Navbar
