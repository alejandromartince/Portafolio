import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWritter = () => {
  const roles = ["Desarrollador Web", "Programador", "Enthusiasta de la tecnología"];

  return (
    <div>
      <div className="typewriter-effect">
        <Typewriter
          options={{
            strings: roles,
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
