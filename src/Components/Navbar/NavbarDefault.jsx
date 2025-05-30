//Importamos los componentes de react
import { Link } from "react-scroll";

//Importamos la informacion
import { infoNavbar } from "../../Constants/infoNavbar";

//Importamos el contexto
import { useIdioma } from "../../Contexts/idiomaContext";

const NavbarDefault = () => {

  // Obtenemos el idioma actual del contexto
  const { idioma } = useIdioma();

  return (

    <div className="navbar__default">
      <nav className="navbar__container">
        <ul>
          {infoNavbar.map((item) => (
            <li key={item.id}>
              <Link to={item.link} smooth duration={700}>{item[idioma]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavbarDefault
