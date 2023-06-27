import React from 'react'
import { useState } from 'react'

import { Button, Collapse } from 'react-bootstrap'
import { FaHeart, FaRegHeart } from "react-icons/fa"

export function PublicationItem({mascota})  {

  const [isLiked, setIsLiked] = useState(false) // para el corazon
  const [open, setOpen] = useState(false) // para ver mas

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="bg-white rounded shadow"><img src={mascota.fotos[0]} className="img-fluid card-img-top"/>
        <div className="p-4">
          <div className="d-flex justify-content-between">
            <h2>{mascota.nombre}</h2>
              <span className="me-interesa" onClick={handleClick}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </span>
          </div>
          <div className="text-left">
              <strong>Ciudad:</strong> {mascota.ciudad} <br />
              <Collapse in={open}>
                <div>
                  <strong>Descripcion:</strong> {mascota.descripcion} <br />
                  <strong>Sexo:</strong> {mascota.sexo}<br />
                  <strong>Tamaño:</strong> {mascota.tamano}<br />
                  <strong>Antecedentes médicos:</strong> {mascota.antecedentes_medicos}<br />
                </div>
              </Collapse>
            <Button variant="warning" onClick={handleToggle} className='mt-3'>
              {open ? 'Ver menos' : 'Ver más'}
            </Button>
          </div>   
        </div>
      </div>
    </div>
  )
}
