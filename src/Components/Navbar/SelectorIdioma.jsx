import React from 'react';

import '../../Sections/Navbar/Navbar.css'; // Asegúrate de que la ruta sea correcta

//Importamos el contexto
import { useIdioma } from '../../Contexts/IdiomaContext';


const SelectorIdioma = () => {
  const { idioma, cambiarIdioma } = useIdioma();

  const handleChange = (e) => {
    cambiarIdioma(e.target.value);
  };


  // CAMBIAR POR REACT-SELECT
  return (
    <div>
      <label htmlFor="idioma">Selecciona idioma: </label>
      <select id="idioma" value={idioma} onChange={handleChange}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default SelectorIdioma;
