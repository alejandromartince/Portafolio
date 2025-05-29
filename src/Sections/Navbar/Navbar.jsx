//Importamos los componentes
import NavbarDefault from "../../Components/Navbar/NavbarDefault";
import SelectorIdioma from "../../Components/Navbar/SelectorIdioma";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/General/useTipoDispositivo";

//Importamos los estilos
import "./Navbar.css";

const Navbar = () => {

    const tipoDispositivo = useTipoDispositivo();

    return (

        <div className="navbar">

            {/* SELECCIONAR IDIOMAS PARA TODOS LOS DISPOSITIVOS */}
            <SelectorIdioma />

            {/* NAVBAR PARA DESKTOP Y TABLET */}
            {tipoDispositivo !== "movil" && (<NavbarDefault />)}

        </div>
    )
}

export default Navbar
