//Importamos los hooks de react
import { useState, useRef, useEffect } from "react";

// Importamos el contexto de idioma
import { useIdioma } from "../../Contexts/idiomaContext";

//Importamos los iconos
import { IoIosArrowDown } from "react-icons/io";

const opcionesIdiomas = [
  { codigo: 'es', nombre: 'ES', bandera: '/assets/Imagenes/Banderas/Espanol.png' },
  { codigo: 'en', nombre: 'EN', bandera: '/assets/Imagenes/Banderas/Ingles.png' },
];

const SelectorIdioma = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [mostrarSelector, setMostrarSelector] = useState(false);
  const contenedorRef = useRef(null);

  const idiomaActual = opcionesIdiomas.find(op => op.codigo === idioma);

  const handleSeleccion = (codigo) => {
    cambiarIdioma(codigo);
    setMostrarSelector(false);
  };

  // Detectar clic fuera para cerrar menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contenedorRef.current && !contenedorRef.current.contains(event.target)) {
        setMostrarSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="selector-idioma" ref={contenedorRef}>
      <div
        className="selector-idioma__actual"
        onClick={() => setMostrarSelector(!mostrarSelector)}
      >
        <img src={idiomaActual.bandera} alt={idiomaActual.nombre} className="imagen-bandera" />
        <span>{idiomaActual.nombre}</span>
        <IoIosArrowDown
          size={20}
          style={{
            transform: mostrarSelector ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s"
          }}
        />
      </div>

      {mostrarSelector && (
        <div className="selector-idioma__opciones">
          {opcionesIdiomas.map(opcion => (
            <div
              key={opcion.codigo}
              className={`selector-idioma__opcion ${opcion.codigo === idioma ? 'activo' : ''}`}
              onClick={() => handleSeleccion(opcion.codigo)}
            >
              <img src={opcion.bandera} alt={opcion.nombre} className="imagen-bandera" />
              <span>{opcion.nombre}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorIdioma;
