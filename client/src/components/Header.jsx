// falta cerrar sesion,   

import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">

          <span className="navbar-brand">
            <div className="header-container d-flex">
              <h1 className="header-logo-name">
                <Link to={"/"}>PeluAdopta</Link>
              </h1>
            </div> 
          </span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-toggler">    
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link to={"/register"} className="btn btn-warning btn-sm">Registrarse</Link> 
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="btn btn-warning btn-sm">Iniciar sesión</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>

  )
}

export default Header