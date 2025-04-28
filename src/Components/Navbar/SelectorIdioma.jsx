import React from 'react';
import Select, { components } from 'react-select';

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

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderColor: state.isFocused ? '#fff' : '#222',
      boxShadow: state.isFocused ? '0 0 5px rgb(255, 255, 255), 0)' : 'none',
      '&:hover': {
        borderColor: '#fff',
      },
      color: '#00ff00',
      minHeight: '30px',
      height: '30px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#00ff00',
      display: 'flex',
      alignItems: 'center',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'transparent' : '#transparent',
      color: '#00ff00',
      '&:hover': {
        backgroundColor: '#005500',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#0f0f0f',
      border: '1px solid #fff',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#fff' : '#fff',
      '&:hover': {
        color: '#fff',
      },
      padding: '2px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#00aa00',
    }),
    input: (provided) => ({
      ...provided,
      color: '#fff',
    }),
  };

  // Mostramos SOLO la bandera arriba
  const SingleValue = ({ data, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={data.icon}
        alt={data.label}
        style={{ width: '20px', height: 'auto' }}
      />
    </components.SingleValue>
  );

  // Mostramos SOLO la bandera en el menú desplegable
  const Option = (props) => (
    <components.Option {...props}>
      <img
        src={props.data.icon}
        alt={props.data.label}
        style={{ width: '30px', height: 'auto' }}
      />
    </components.Option>
  );

  return (
    <div>
      <Select
        id="idioma"
        options={opciones}
        value={idiomaSeleccionado}
        onChange={handleChange}
        styles={customStyles}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        components={{ SingleValue, Option }}
      />
    </div>
  );
};

export default SelectorIdioma;
