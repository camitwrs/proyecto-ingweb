import React from 'react'

import {Publications} from '../components/Publications'

export const MainPagePublicador = () => {
  return (
    <section className="main-view">
      <h2 className="m-2">Hola, nombre_usuario</h2>

      <div className="container">
        <p className="text-center">Tus mascotas en adopción:</p>
        

        <Publications/>
      </div>      
    </section>
  )
}

