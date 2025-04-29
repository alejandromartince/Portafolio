import React from 'react';
import Typewriter from 'typewriter-effect';

//Importamos los contextos
import { useIdioma } from '../../Contexts/IdiomaContext';

const TypeWritter = () => {

  const idioma = useIdioma();
 
  const roles = {
    es: [
      "Ingeniero Informático",
      "Desarrollador Web",
      "Desarrollador Frontend",
      "Administrador de Sistemas Informáticos en Red",
    ],
    en: [
      "Computer Engineer",
      "Web Developer",
      "Frontend Developer",
      "Networked Computer System Administrator",
    ],
  }


  return (
    <div>
      <div className="typewriter-effect">
        <Typewriter
          options={{
            strings: roles[idioma.idioma],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delaySpeed: 1000,
            cursor: "|",
            cursorBlinking: true,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWritter;
