import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

export const ProfilePage = () => {
  const [userData] = useState({
    tipoUsuario: 'Adoptar',
    nombre: 'joklit',
    correo: 'abc@gmail.com',
    password: '123asSd'
  });

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Hola! {userData.nombre}, bienvenido a tu perfil.</h1>

      <div>
        <h2>Nombre: {userData.nombre}</h2>
        <p>Correo electrónico: {userData.correo}</p>
      </div>
    </Container>
  );
};
