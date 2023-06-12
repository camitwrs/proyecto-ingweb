import React from 'react';

import { Link, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react'

import usuarios from '../assets/data/users.json'

export const LoginPage = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    correo: '',
    contrasenya: ''
  })

  const [loggedIn, setLoggedIn] = useState(false)
  const [usuarioExistente, setUsuarioExistente] = useState(null); // Variable para almacenar el usuario existente

  // Funcion al apretar submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Obtener los valores del formulario del estado formData
    const { correo, contrasenya } = formData
  
    // Verificar si el usuario existe en el archivo usuarios.json
    const usuario = usuarios.find(
      (usuario) => usuario.correo === correo && usuario.contrasenya === contrasenya
    )
  
    if (usuario) {
      // El usuario existe, realizar la lógica de acceso permitido
      console.log('Acceso permitido');
      setLoggedIn(true); 
      setUsuarioExistente(usuario)
      console.log(usuario);
    } else {
      // El usuario no existe o las credenciales son incorrectas
      console.log('Credenciales incorrectas');
      // Mostrar mensaje de error o realizar acciones adicionales aquí
    }
  }

  useEffect(() => {
    if (loggedIn && usuarioExistente) {
      const userType = usuarioExistente.tipo;

      if (userType === 'adoptar') {
        navigate('/sesion1');
      } else if (userType === 'publicar') {
        navigate('/sesion2');
      }
    }
  }, [loggedIn, navigate, usuarioExistente])

	return (
		<section>
      <h1>Ingresar</h1>
      <p>Bienvenido de vuelta</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" className="form-control" id="correo" name="correo" value={formData.correo} onChange={(e) => setFormData({ ...formData, correo: e.target.value })} placeholder="Ingrese su correo electrónico" autoComplete='off' required/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="contrasenya">Contraseña</label>
          <input type="password" className="form-control" id="contrasenya" name="contrasenya" value={formData.contrasenya} onChange={(e) => setFormData({ ...formData, contrasenya: e.target.value })} placeholder="Ingrese su contraseña" autoComplete='off' required/>
        </div>
        <div className="form-group mb-2">
          <button type="submit" className="btn btn-warning">Ingresar</button>
        </div>
        <div className="form-group mb-2">
          <Link to={"/sesion1"} className="btn btn-outline-dark btn-sm">Adoptante (temp)</Link> 
          <Link to={"/sesion2"} className="btn btn-outline-dark btn-sm">Publicador (temp)</Link> 
        </div>
      </form>
    </section>
	)
}