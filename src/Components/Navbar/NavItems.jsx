//Importamos los hooks de react
import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "../../Constants/navLinks";

//Importamos el contexto del idioma
import { useIdioma } from "../../Contexts/IdiomaContext";

const NavItems = ({ onClick }) => {
    const { idioma } = useIdioma(); // 👈 aquí obtienes el idioma actual

    return (
        <div className="contenedor-izquierda">
            <ul className="navbar-list">
                {navLinks.map((item) => (
                    <li key={item.id} className="navbar-item">
                        <Link
                            to={item.href}
                            className="navbar-enlace"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={0}
                            onClick={onClick}
                        >
                            {item.name[idioma]} {/* 👈 cambia language por idioma */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavItems;
