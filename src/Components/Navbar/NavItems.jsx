import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "../../Constants/navLinks";
import { useIdioma } from "../../Contexts/IdiomaContext";

const NavItems = ({ onClick, activeSection }) => {
  const { idioma } = useIdioma();

  return (
    <div className="contenedor-izquierda">
      <ul className="navbar-list">
        {navLinks.map((item) => {
          // Si la sección activa es 'introduccion' y el item es 'inicio', se marca como activo
          const isActive =
            activeSection === item.href ||
            (activeSection === "introduccion" && item.href === "inicio");

          return (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.href}
                className={`navbar-enlace ${isActive ? "active" : ""}`}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={onClick}
              >
                {item.name[idioma]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
