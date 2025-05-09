import React, { useRef, useEffect, useState } from 'react';

//Importmos los iconos
import { IoIosArrowDown } from 'react-icons/io';


//Importamos el contexto del idioma
import { useIdioma } from '../../Contexts/IdiomaContext';

//Creamos el componente SelectorIdiomas
const SelectorIdiomas = () => {
  const imagenes = [
    { id: 1, src: '../assets/Imagenes/Banderas/Espanol.png', alt: 'Español', code: 'es' },
    { id: 2, src: '../assets/Imagenes/Banderas/Ingles.png', alt: 'Inglés', code: 'en' },
  ];


  const [idiomaActual, setIdiomaActual] = useState(imagenes[0]);
  const [menuDesplegable, setMenuDesplegable] = useState(false);
  const { cambiarIdioma } = useIdioma();

  // Referencia al contenedor del selector de idiomas para detectar clics fuera
  const contenedorRef = useRef(null);

  //Cambiar el valor del menu desplegable
  const handleClick = () => {
    setMenuDesplegable(!menuDesplegable);
  };

  
  const seleccionarIdioma = (idioma) => {
    setIdiomaActual(idioma);
    cambiarIdioma(idioma.code); // Cambiar idioma en el contexto
    setMenuDesplegable(false);
  };

  // Detectar clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contenedorRef.current && !contenedorRef.current.contains(event.target)) {
        setMenuDesplegable(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="contenedor-derecha" ref={contenedorRef}>
      <div className="selector-idiomas-container" onClick={handleClick} style={{ position: 'relative', cursor: 'pointer' }}>
        <img src={idiomaActual.src} alt={idiomaActual.alt} className="bandera-selector" />
        <IoIosArrowDown size={25} />

        {menuDesplegable && (
          <div className="menu-idiomas">
            {imagenes
              .filter((img) => img.id !== idiomaActual.id)
              .map((imagen) => (
                <div key={imagen.id} onClick={() => seleccionarIdioma(imagen)} className="opcion-idioma">
                  <img src={imagen.src} alt={imagen.alt} className="bandera-selector" />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectorIdiomas;
