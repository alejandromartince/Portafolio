//Importamos la informacion
import { infoNavbar } from "../../Constants/infoNavbar";

//Importamos el contexto
import { useIdioma } from "../../Contexts/idiomaContext";

const NavbarDefault = () => {

  // Obtenemos el idioma actual del contexto
  const { idioma } = useIdioma();

  return (

    <nav className="navbar__container">
      <ul>
        {infoNavbar.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item[idioma]}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarDefault
