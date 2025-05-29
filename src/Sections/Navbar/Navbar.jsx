//Importamos la informacion
import { infoNavbar } from "../../Constants/infoNavbar";

//Importamos el contexto
import { useIdioma } from "../../Contexts/idiomaContext";

//Importamos los estilos
import "./Navbar.css";

const Navbar = () => {

    // Obtenemos el idioma actual del contexto
    const { idioma } = useIdioma();

    return (

        <div>
            <nav>
                <ul>
                    {infoNavbar.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>{item[idioma]}</a> 
                        </li>
                    ))}
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar
