import React from 'react'

//Importamos los estilos
import './Inicio.css'
import TypeWritter from '../../Components/Inicio/TypeWritter'

const Inicio = () => {
  return (
    <section id='inicio' className='inicio'>
      <div className='inicio-contenido'>
        <p className='titulo-nombre'>Alejandro</p>
        <h1 className='titulo-apellido'>MARTÍN</h1>
        <TypeWritter />
      </div>
    </section >
  )
}

export default Inicio

//HACER EL APELLIDO DE UN TAMAÑO DIV Y QUE EL TYPEWRITER SIEMPRE TENGA ESE TAMAÑO