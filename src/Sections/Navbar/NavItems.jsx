import React, { useEffect } from "react";
import { Link } from "react-scroll";

//Importamos la informacion
import { navLinks } from "../../Constants/navLinks";

//Importamos las funciones
import { activeClass } from "../../Functions/Navbar/active-class";

const NavItems = ({ language = "es", onClick }) => {

    useEffect(() => {
        // Llamamos a la función para activar los enlaces
        activeClass();
    }, []); // Este effect solo se ejecuta una vez cuando el componente se monta
    
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
