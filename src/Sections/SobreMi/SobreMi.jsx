import React from 'react'

//Importamos los estilos
import './SobreMi.css'

const SobreMi = () => {
  return (
    <section id='sobremi' className='sobremi'>
      <div className='sobremi-contenido'>
        <h2 className='sobremi-titulo'>Sobre mí</h2>
        <p className='sobremi-descripcion'>Soy un desarrollador web con experiencia en la creación de aplicaciones y sitios web. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.</p>
        <a href='#contacto' className='sobremi-boton'>Contáctame</a>
      </div>
      
    </section>
  )
}

export default SobreMi
