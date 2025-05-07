//Hook para manejar el efecto de scroll y la activación de secciones
import { useEffect } from "react";

export const useScrollEffect = (setActiveSection) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const inicio = document.getElementById("inicio");
      const introduccion = document.getElementById("introduccion");
      const sobremi = document.getElementById("sobremi");
      const contacto = document.getElementById("contacto");

      if (introduccion) {
        const top = introduccion.offsetTop;
        const bottom = top + introduccion.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection("inicio"); // 👈 Se mantiene "inicio"
          return;
        }
      }

      if (sobremi) {
        const top = sobremi.offsetTop;
        const bottom = top + sobremi.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection("sobremi");
          return;
        }
      }

      if (contacto) {
        const top = contacto.offsetTop;
        const bottom = top + contacto.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection("contacto");
          return;
        }
      }

      if (inicio) {
        const top = inicio.offsetTop;
        const bottom = top + inicio.offsetHeight;
        if (scrollPosition < bottom) {
          setActiveSection("inicio");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);
};
