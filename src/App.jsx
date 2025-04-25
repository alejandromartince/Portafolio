//Importamos los componentes
import Navbar from './Sections/Navbar/Navbar'
import Inicio from './Sections/Inicio/Inicio'
import SobreMi from './Sections/SobreMi/SobreMi'

//Importamos los contextos
import { IdiomaProvider } from './Contexts/IdiomaContext'

//Importamos los estilos
import './App.css'

function App() {

  return (
    <IdiomaProvider>
      <>
        <Navbar />
        <Inicio />
        <SobreMi />
      </>
    </IdiomaProvider>
  )
}

export default App
