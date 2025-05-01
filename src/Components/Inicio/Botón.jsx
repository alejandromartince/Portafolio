import React from 'react';
import '../../ComponentsStyles/BotonInicio.css';

const BotonInicio = ({ text = "Buy Tickets", href = "#" }) => {
  return (
    <a className="fancy" href={href}>
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </a>
  );
};

export default BotonInicio;
