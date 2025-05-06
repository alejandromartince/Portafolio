import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../../ComponentsStyles/BotonInicio.css';

const BotonInicio = ({ text, to, offset, duration = 500 }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      offset={offset}
      duration={duration}
      className="botoninicio"
    >
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </ScrollLink>
  );
};

export default BotonInicio;
