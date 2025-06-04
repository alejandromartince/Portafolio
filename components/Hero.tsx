//Obligatorio apra usar los componentes del idioma en el cliete y no en el servidor
'use client'
import React from 'react'

// Importamos los componentes
import SelectorIdiomas from './Hero/SelectorIdiomas'
import { useLanguage } from '../contexts/LanguageContext'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {

  const { language } = useLanguage();
  console.log(language)

  return (
    <div className="relative h-[70vh] w-screen overflow-hidden">
      {/* Selector de idioma en la esquina superior derecha con padding */}
      <div className="absolute top-6 right-10 z-30">
        <SelectorIdiomas />
      </div>

      {/* Contenido centrado */}
      <div className="relative flex flex-col h-full w-full items-center justify-center px-4 gap-1">
        <p className='text-blue-300'>Página creada con NextJS</p>
        <TextGenerateEffect className='text-white font-bold text-center tracking-wide md:text-lg lg:text-2xl' words='Ingeniero Informático Especializado en Programación Web' />
        <p className='text-white'>Hola, soy Alejandro Martín, bienvenido a mi portafolio</p>
      </div>
    </div>
  )
}

export default Hero
