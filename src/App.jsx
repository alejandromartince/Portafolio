// Importamos los componentes
import Navbar from './Sections/Navbar/Navbar';
import Inicio from './Sections/Inicio/Inicio';
import SobreMi from './Sections/SobreMi/SobreMi';

// Importamos los contextos
import { IdiomaProvider } from './Contexts/IdiomaContext';
import { SectionProvider } from './Contexts/SectionContext';
// Importamos los estilos
import './App.css';

function App() {
  return (
    <IdiomaProvider>
      <SectionProvider>
        <>
          <Navbar />
          <Inicio />
          <SobreMi />
        </>
      </SectionProvider>
    </IdiomaProvider>
  );
}

export default App;
