import React from 'react'

import { PublicationItem } from './PublicationItem'

import mascotas from '../assets/data/publications.json'

export function Publications()  {
  return (

      <div className="row">
        {mascotas.map((mascota) =>(
            <PublicationItem key={mascota.id} mascota={mascota}/>
        ))}
      </div>
    
  )
} 