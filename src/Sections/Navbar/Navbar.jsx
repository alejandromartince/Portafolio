import React, { useState } from 'react';

//Importamos el hook que maneja el scroll y los efectos de activación de secciones
import { useScrollEffect } from '../../Hooks/useScrollEffect';
import useScrollPositionY from '../../Hooks/useScrollPositionY';

//Importamos los componentes de la barra de navegación
import NavItems from '../../Components/Navbar/NavItems';
import SelectorIdiomas from '../../Components/Navbar/SelectorIdiomas';

//Importamos el contexto
import { useIdioma } from '../../Contexts/IdiomaContext';

//Importamos el estilo
import './Navbar.css';

const Navbar = () => {
  const idioma = useIdioma();
  const [activeSection, setActiveSection] = useState('inicio');
  const scrollY = useScrollPositionY();

  useScrollEffect(setActiveSection);


  return (
    <header className={`navbar ${scrollY >= 150 ? 'navbar-scrolled' : ''}`}>

      {/*Componente que muestra las secciones de la barra de navegación*/}
      <NavItems language={idioma} activeSection={activeSection} />

      {/*Componente que muestra el selector de idiomas*/}
      <SelectorIdiomas />

    </header>
  );
};

export default Navbar;
