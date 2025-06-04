//Obligatorio apra usar los componentes del idioma en el cliete y no en el servidor
'use client'
import React from 'react'

//Importamos el contexto del idioma
import { useLanguage } from '../../contexts/LanguageContext'

//Importamos el hook de nextJS para las imagenes (mejor que la etiqueta normal)
import Image from 'next/image'

const SelectorIdiomas = () => {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex gap-4">
            <button
                onClick={() => setLanguage('es')}
                className={`transition-all duration-300 ease-in-out cursor-pointer transform ${language === 'es' ? 'scale-110 opacity-100' : 'opacity-50'
                    }`}
                aria-label="Cambiar a español"
            >
                <Image
                    src="/icons/es.png"
                    alt="Español"
                    width={30}
                    height={30}
                />
            </button>

            <button
                onClick={() => setLanguage('en')}
                className={`transition-all duration-300 ease-in-out cursor-pointer transform ${language === 'en' ? 'scale-130 opacity-100' : 'opacity-50'
                    }`}
                aria-label="Switch to English"
            >
                <Image src="/icons/en.png" alt="English" width={30} height={30} />
            </button>
        </div>
    )
}

export default SelectorIdiomas
