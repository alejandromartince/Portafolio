
//Importamos los componentes
import Navbar from "./Sections/Navbar/Navbar";

//Importamos el contexto
import { IdiomaProvider } from "./Contexts/idiomaContext";

//Importamos estilos
import "./App.css";

function App() {

  return (
    <IdiomaProvider>
      <Navbar />
    </IdiomaProvider>
  );
}

export default App;
