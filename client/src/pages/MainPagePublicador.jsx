import React, { useState } from 'react';
import { NewPost } from '../components/NewPost';
import { Button, Collapse } from 'react-bootstrap';

// Importar datos de publicaciones y usuarios
import publications from '../assets/data/publications.json';
import users from '../assets/data/users.json';

export const MainPagePublicador = () => {
  const [showNewPost, setShowNewPost] = useState(false);

  const handleToggle = () => {
    setShowNewPost(!showNewPost);
  };

  // Buscar el usuario "doglover"
  const usuario = users.find((user) => user.nombre === 'kimK');

  // Obtener las mascotas publicadas por el usuario "doglover"
  const mascotasPublicadas = usuario?.mascotasPublicadas ? publications.filter(publicacion => usuario.mascotasPublicadas.includes(publicacion.id)) : [];

  return (
    <section className="main-view">
      <h2 className="m-2">Hola, {usuario.nombre}</h2>

      <div className="container">
        <h4 className="text-center">Tus mascotas en adopción:</h4>

        <div className="row">
          {mascotasPublicadas.map((publicacion) => (
            <div key={publicacion.id} className="col-md-4 mb-3">
              <div className="card bg-white rounded shadow">
                <img src={publicacion.fotos[0]} className="card-img-top" alt={publicacion.nombre} />
                <div className="card-body">
                  <h2 className="card-title font-weight-bold">{publicacion.nombre}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="warning" type="submit" onClick={handleToggle} className="mt-3">
          {showNewPost ? 'Ocultar Formulario' : 'Nueva Publicación'}
        </Button>
        <Collapse in={showNewPost}>
          <div className="mt-3">
            {showNewPost && <NewPost onHideForm={handleToggle} />}
          </div>
        </Collapse>
      </div>
    </section>
  );
};
