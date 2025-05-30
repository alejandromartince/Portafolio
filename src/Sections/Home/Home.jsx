import { Link } from 'react-scroll';

//Importamos los componentes
import BotonLinea from '../../Components/Botones/BotonLinea';

//Importamos el contexto del idioma
import { useIdioma } from '../../Contexts/idiomaContext'

// Importamos los estilos
import './Home.css';

const Home = () => {

  const { idioma } = useIdioma();

  return (
    <section className='home' id='home'>
      {/*FONDO DEGRADADO DE LA PAGINA */}
      <div className="degradado-fondo"></div>

      <div className='texto-container'>
        <p>hola</p>
        <BotonLinea id="proyectos" idioma={idioma} />
        <BotonLinea id="cv" idioma={idioma} />
      </div>

    </section>
  )
}

export default Home;
