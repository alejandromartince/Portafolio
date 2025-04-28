import React from 'react';
import Typewriting from 'react-typewriting';

const TypeWritter = () => {
  return (
    <div>
      <h1>Mi Portafolio</h1>
      <Typewriting
        typing={["¡Hola! Soy un desarrollador web."]}  // Asegúrate de pasar un array de textos
        speed={100}  // Velocidad de escritura (en ms por letra)
        delay={500}  // Tiempo de espera antes de empezar a escribir
      />
    </div>
  );
};

export default TypeWritter;
