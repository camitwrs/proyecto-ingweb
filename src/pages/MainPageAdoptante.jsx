import React from 'react'

import {Publications} from '../components/Publications'

export const MainPageAdoptante = () => {;

  return (
    <section className="main-view">
        <h2 className="m-2">Hola, {nombreUsuario}</h2>

        <div className="container">
            <p className="text-center">Mascotas que buscan un hogar:</p>
            <div className="d-flex justify-content-end">
                <button type="button" value="filtrar" className="btn btn-dark m-2">Filtrar</button>
            </div>

            
        </div>

        
    </section>
  )
}
