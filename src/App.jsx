// Importamos los componentes
import Navbar from './Sections/Navbar/Navbar';
import Inicio from './Sections/Inicio/Inicio';
import Proyectos from './Sections/Proyectos/Proyectos';

// Importamos los contextos
import { IdiomaProvider } from './Contexts/IdiomaContext';

// Importamos los estilos
import './App.css';

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
