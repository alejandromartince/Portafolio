import React from 'react'

//Importamos los componentes personalizados
import { Spotlight } from './ui/SpotlightNew'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 min-h-screen'>
      <Spotlight />
      <Spotlight />
    </div>
  )
}

export default Hero
