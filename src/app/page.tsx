// Importamos los componentes UI
import { GridBackgroundDemo } from "../../components/ui/GridBackground";
import { Spotlight } from "../../components/ui/SpotlightNew";

//Importamos las secciones
import Hero from "../../components/Hero";
import About from "../../components/About";

export default function Home() {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen h-screen">


        {/* Fondo de rejilla */}
        <div className="absolute inset-0 z-0">
          <GridBackgroundDemo />
        </div>

        {/* Spotlight encima del fondo */}
        <div className="absolute inset-0 z-10">
          <Spotlight />
        </div>

        {/*Importamos las diferentes secciones*/}
        <Hero />
        <About />
      </div>
    </main>
  );
}
