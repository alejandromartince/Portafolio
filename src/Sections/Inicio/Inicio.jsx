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
        <div className='inicio-texto'>
          <p className='titulo-nombre'>ALEJANDRO</p>
          <div className='apellido-typewritter-container'>
            <h1 className='titulo-apellido'>MARTÍN</h1>
            <TypeWritter />
          </div>
        </div>
        <BotonInicio text="Proyectos" to="sobremi" duration={1200}/>
      </div>
    </section >
  )
}

export default Inicio

//HACER EL APELLIDO DE UN TAMAÑO DIV Y QUE EL TYPEWRITER SIEMPRE TENGA ESE TAMAÑO