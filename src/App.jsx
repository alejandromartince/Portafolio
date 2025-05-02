// Importamos los componentes
import Navbar from './Sections/Navbar/Navbar';
import Inicio from './Sections/Inicio/Inicio';

// Importamos los contextos
import { IdiomaProvider } from './Contexts/IdiomaContext';

// Importamos los estilos
import './App.css';
import Proyectos from './Sections/Proyectos/Proyectos';

function App() {
  return (
    <IdiomaProvider>
        <>
          <Navbar />
          <Inicio />
          <Proyectos />
        </>
    </IdiomaProvider>
  );
}

export default App;
