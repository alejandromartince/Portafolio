import React, { useState } from 'react';

//Importamos el hook que maneja el scroll y los efectos de activación de secciones
import { useScrollEffect } from '../../Hooks/useScrollEffect';
import useScrollPositionY from '../../Hooks/useScrollPositionY';

//Importamos el componente NavItems
import NavItems from '../../Components/Navbar/NavItems';

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
<NavItems language={idioma} activeSection={activeSection} />

      <div className='contenedor-derecha'>
        <p>insert here</p>
      </div>
    </header>
  );
};

export default Navbar;
