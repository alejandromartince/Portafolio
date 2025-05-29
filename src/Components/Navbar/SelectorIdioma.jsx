import { useState } from "react";
import { useIdioma } from "../../Contexts/idiomaContext";
import { opcionesIdiomas } from "../../Constants/infoNavbar";

const SelectorIdioma = () => {
    const { idioma, cambiarIdioma } = useIdioma();
    const [mostrarSelector, setMostrarSelector] = useState(false);

    const opcionesIdiomas = [
        { codigo: 'es', nombre: 'Español', bandera: '/assets/Imagenes/Banderas/Espanol.png' },
        { codigo: 'en', nombre: 'English', bandera: '/assets/Imagenes/Banderas/Ingles.png' },
    ];

    return (
        <div className="navbar__idioma">
            <div onClick={() => setMostrarSelector(!mostrarSelector)} className="navbar__idioma-selector">
                <img src={idiomaActual.bandera} alt={idiomaActual.nombre} className="imagen-bandera" />
            </div>

            {mostrarSelector && (
                <div>
                    hola
                </div>
            )}

        </div>
    );
};

export default SelectorIdioma;
