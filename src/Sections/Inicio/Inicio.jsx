import React from 'react'

//Importamos los estilos
import './Inicio.css'
import TypeWritter from '../../Components/Inicio/TypeWritter'

const Inicio = () => {
  return (
    <section id='inicio' className='inicio'>
      <div className='inicio-contenido'>
        <h2 className='titulo-nombre'>Alejandro</h2>
        <h1 className='titulo-apellido'>Martin</h1>
        <TypeWritter />
        <a href='#sobremi' className='inicio-boton'>Saber más</a>
      </div>
    </section >
  )
}

export default Inicio
