import React from 'react'

//Importamos los componentes
import TypeWritter from '../../Components/Inicio/TypeWritter'
import BotonInicio from '../../Components/Inicio/Botón'

//Importamos los estilos
import './Inicio.css'

const Inicio = () => {
  return (
    <section id='inicio' className='inicio'>
      <div className='inicio-contenido'>
        <p className='titulo-nombre'>ALEJANDRO</p>
        <div className='apellido-typewritter-container'>
          <h1 className='titulo-apellido'>MARTÍN</h1>
          <TypeWritter />
        </div>

        <BotonInicio text="Proyectos" href="#proyectos" />
      </div>
    </section >
  )
}

export default Inicio

//HACER EL APELLIDO DE UN TAMAÑO DIV Y QUE EL TYPEWRITER SIEMPRE TENGA ESE TAMAÑO