import React from 'react';
import Select from 'react-select';

import '../../Sections/Navbar/Navbar.css';
import { useIdioma } from '../../Contexts/IdiomaContext';

const SelectorIdioma = () => {
  const { idioma, cambiarIdioma } = useIdioma();

  const opciones = [
    { value: 'es', label: 'Español', icon: '/assets/Imagenes/Banderas/Espanol.png' },
    { value: 'en', label: 'English', icon: '/assets/Imagenes/Banderas/Ingles.png' },
  ];

  const handleChange = (opcionSeleccionada) => {
    cambiarIdioma(opcionSeleccionada.value);
  };

  const idiomaSeleccionado = opciones.find(opcion => opcion.value === idioma);

  // Estilos personalizados para un navbar oscuro + verde gamer
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#0f0f0f', // Fondo muy oscuro
      borderColor: state.isFocused ? '#00ff00' : '#222', // Borde verde si está enfocado
      boxShadow: state.isFocused ? '0 0 5px #00ff00' : 'none',
      '&:hover': {
        borderColor: '#00ff00',
      },
      color: '#00ff00',
      minHeight: '30px',
      height: '30px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#00ff00', // Texto verde
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#003300' : '#0f0f0f', // Oscuro o verde muy oscuro al pasar ratón
      color: '#00ff00',
      '&:hover': {
        backgroundColor: '#005500',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#0f0f0f', // Menú desplegable oscuro
      border: '1px solid #00ff00',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#00ff00' : '#00aa00', // Flecha de desplegar
      '&:hover': {
        color: '#00ff00',
      },
      padding: '2px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#00aa00',
    }),
    input: (provided) => ({
      ...provided,
      color: '#00ff00', // Input de búsqueda interna
    }),
  };

  return (
    <div>
      <label htmlFor="idioma" style={{ color: '#00ff00', marginRight: '8px' }}>
        Selecciona idioma:
      </label>
      <Select
        id="idioma"
        options={opciones}
        value={idiomaSeleccionado}
        onChange={handleChange}
        placeholder="Elige un idioma"
        styles={customStyles}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        getOptionLabel={(e) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={e.icon}
              alt={e.label}
              style={{ width: '20px', height: '20px', marginRight: '8px' }}
            />
            {e.label}
          </div>
        )}
      />


    </div>
  );
};

export default SelectorIdioma;
