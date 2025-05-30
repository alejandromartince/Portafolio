// src/utils/infoBotones.js
export const infoBotones = (idioma, id) => {
  const botones = [
    {
      id: "proyectos",
      texto: {
        es: "Proyectos",
        en: "Projects",
      },
      tipo: "scroll", // ← para usar react-scroll
      url: "projects", // ← el ID de la sección a la que hará scroll
    },
    {
      id: "cv",
      texto: {
        es: "Descargar CV",
        en: "Download CV",
      },
      tipo: "externo", // ← para un enlace externo
      url: "https://tucv.com/archivo.pdf",
    },
  ];

  const boton = botones.find((b) => b.id === id);

  return boton
    ? {
        id: boton.id,
        texto: boton.texto?.[idioma] || boton.texto?.es,
        url: boton.url,
        tipo: boton.tipo,
        offset: boton.offset || 0,
      }
    : null;
};
