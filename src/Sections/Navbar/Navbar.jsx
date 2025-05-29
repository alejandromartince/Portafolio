//Importamos los componentes
import NavbarDefault from "../../Components/Navbar/NavbarDefault";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
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

            {/* NAVBAR PARA MOVIL */}
            {tipoDispositivo === "movil" && (
                <NavbarMobile />
            )}

        </div>
    )
}

export default Navbar
