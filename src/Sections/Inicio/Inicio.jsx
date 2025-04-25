import React from 'react'

//Importamos los estilos
import './Inicio.css'

const Inicio = () => {
  return (
    <section id='inicio' className='inicio'>
      <div className='inicio-contenido'>
        <h1 className='inicio-titulo'>Hola, soy [Tu Nombre]</h1>
        <p className='inicio-descripcion'>Soy un desarrollador web apasionado por crear experiencias digitales únicas.</p>
        <a href='#sobremi' className='inicio-boton'>Saber más</a>
      </div>
      
    </section >
  )
}

export default Inicio
