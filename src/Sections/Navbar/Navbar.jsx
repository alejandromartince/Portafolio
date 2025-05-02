//Importamos los hooks de react
import React, { useEffect } from 'react'
import { scroller } from 'react-scroll'; // Importamos scroller de react-scroll

//Importamos los componentes
import NavItems from '../../Components/Navbar/NavItems'
import SelectorIdioma from '../../Components/Navbar/SelectorIdioma';

//Importamos el contexto
import { useIdioma } from '../../Contexts/IdiomaContext';

//Importamos los estilos
import './Navbar.css'

const Navbar = () => {

    const idioma = useIdioma(); // Usamos el hook de idioma


    useEffect(() => {
        scroller.scrollTo('inicio', {
            duration: 0,  
            delay: 0,
            smooth: false, 
            offset: 1, 
        });
    }, []);


    return (
        <header className="navbar">
            <NavItems language={idioma} /> 


            <div className='contenedor-derecha'>
                <SelectorIdioma />
            </div>
        </header >
    )
}

export default Navbar

//SE PUEDE ESCRIBIR EN EL IDIOMA. HAY QUE MODIFICAR ESO