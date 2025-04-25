import React from "react";
import { Link } from "react-scroll";

//Importamos la informacion
import { navLinks } from "../../Constants/navLinks";

const NavItems = ({ language = "es", onClick }) => {
  return (
    <div className="contenedor-izquierda">
      <ul className="navbar-list">
        {navLinks.map((item) => (
          <li key={item.id} className="navbar-item">
            <Link
              to={item.href.replace("#", "")}
              className="navbar-enlace"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="activo"
              onClick={onClick}
            >
              {item.name[language]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
