//Importamos los hooks de react
import { Link } from 'react-scroll'; 

//Importamos la informacion
import { infoBotones } from '../../Constants/infoBotones';

//Importamos los estilos
import './BotonLinea.css';

const BotonLinea = ({ idioma, id }) => {
  const data = infoBotones(idioma, id);
  if (!data) return null;

  const { texto, url, tipo, offset } = data;

  
  if (tipo === 'scroll') {
    return (
        <Link
        to={url}
        smooth={true}
        duration={500}
        offset={offset}
        className="fancy"
      >
        <span className="top-key"></span>
        <span className="text-boton-linea">{texto}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </Link>
    );
  }

  // Enlace externo
  return (
    <a className="fancy" href={url} target="_blank" rel="noopener noreferrer">
      <span className="top-key"></span>
      <span className="text-boton-linea">{texto}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </a>
  );
};

export default BotonLinea;
