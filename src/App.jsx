//Importamos los componentes
import Navbar from "./Sections/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";

//Importamos el contexto
import { IdiomaProvider } from "./Contexts/idiomaContext";

//Importamos estilos
import "./App.css";

function App() {

  return (
    <IdiomaProvider>
      <div className="contenedor-principal-app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      </div>
    </IdiomaProvider>

  );
}

export default App;

