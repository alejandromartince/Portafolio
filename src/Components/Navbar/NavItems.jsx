import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "../../Constants/navLinks";
import { useIdioma } from "../../Contexts/IdiomaContext";

const NavItems = ({ onClick }) => {
    const { idioma } = useIdioma();

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
                            activeClass="active"
                        >
                            {item.name[idioma]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavItems;
