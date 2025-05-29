import { useState } from "react";
import { infoNavbar } from "../../Constants/infoNavbar";
import { useIdioma } from "../../Contexts/idiomaContext";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const NavbarMobile = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { idioma } = useIdioma();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="navbar-mobile">
      {/* Icono para abrir el menú */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <IoMdMenu size={28} />
      </button>

      {/* Menú lateral */}
      <div className={`menu-lateral ${menuAbierto ? "abierto" : ""}`}>
        <div className="menu-header">
          <button className="menu-cerrar" onClick={toggleMenu}>
            <IoMdClose size={28} />
          </button>
        </div>

        <nav className="menu-navegacion">
          <ul>
            {infoNavbar.map((item) => (
              <li key={item.id}>
                <a href={item.link} onClick={toggleMenu}>
                  {item[idioma]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Fondo opaco cuando el menú está abierto */}
      {menuAbierto && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default NavbarMobile;
