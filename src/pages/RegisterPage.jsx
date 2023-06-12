import React from 'react'
import {Link} from 'react-router-dom'

export const RegisterPage = () => {

  return (
    <section>
      <h1>Registrarse</h1>
      <p>A ponerse peludos!</p>
      <form id="formulario" className="formulario">
        <fieldset className="form-group">
          <legend className="col-form-label pt-0">Quieres</legend>
          <div className="form-check">
            <label className="form-check-label" htmlFor="radio1">Adoptar</label>
            <input className="form-check-input" type="radio" name="gridRadios" id="inputRadioAdoptar" value="opcionAdoptar" checked/>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="radio2">Publicar</label>
            <input className="form-check-input" type="radio" name="gridRadios" id="inputRadioPublicar" value="opcionPublicar"/>
          </div>
          <div className="form-group" id="grupo__nombre">
            <label className="formulario__label" htmlFor="nombre">Nombre de usuario</label>
            <input type="text" className="form-control" id="inputNombre" name="nombre" placeholder="Ingrese su nombre de usuario"/>
            <p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
          </div>
          <div className="form-group" id="grupo__correo">
            <label className="formulario__label" htmlFor="correo">Correo electrónico</label>
            <input type="email" className="form-control" name="correo" id="inputCorreo" placeholder="Ingrese su correo electrónico"/>
            <p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>

          </div>
          <div className="form-group" id="grupo__password">
            <label className="formulario__label" htmlFor="inputContra">Contraseña</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Ingrese su contraseña"/>
            <p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
          </div>
          <div className="form-group" id="grupo__password2">
            <label className="formulario__label" fhtmlFor="inputConfirmar">Confirmar Contraseña</label>
            <input type="password" className="form-control" name="password2" id="password2" placeholder="Repita su contraseña"/>
            <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
          </div>

          <div className="formulario__grupo">
            <p id="formulario__mensaje" className="formulario__mensaje"><b>Error:</b> Por favor rellena el formulario correctamente. </p>
          </div>
          <div className="formulario__grupo formulario__grupo-btn-enviar">
            <button type="submit" className="btn btn-warning">Registrarse</button>
            <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
