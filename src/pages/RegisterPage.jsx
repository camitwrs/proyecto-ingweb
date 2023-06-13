import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form';

export const RegisterPage = () => {

  const { register, handleSubmit, watch, formState:{errors, isValid}, }= useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Adoptar');

  const onSubmit = (data) => {
    //Agregar el campo tipoUsuario al objeto de datos
    const formData = {...data, tipoUsuario: selectedOption};
    //Realizar acciones al enviar el formulario
    console.log(formData);
    setIsFormSubmitted(true);
  };

  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value);
  }

  return (
    <section>
      <h1>Registrarse</h1>
      <p>A ponerse peludos!</p>
      <form id="register" className="register" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-group">
          <legend className="col-form-label pt-0">Quieres</legend>
          <div className="form-check">
            <label className="form-check-label" htmlFor="radio1">Adoptar</label>
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoUsuario")}
              name="gridRadios"
              id="inputRadioAdoptar"
              value="Adoptar"
              defaultChecked={watch("tipoUsuario") === "Adoptar" || selectedOption === "Adoptar"} // Modifica esta línea
              onChange={handleOptionChange}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="radio2">Publicar</label>
            <input
              className="form-check-input"
              type="radio"
              {...register("tipoUsuario")}
              name="gridRadios"
              id="inputRadioPublicar"
              value="Publicar"
              onChange={handleOptionChange}
            />
          </div>
          <div className="form-group" id="grupo__nombre">
            <label className="register__label" htmlFor="nombre">Nombre de usuario</label>
            <input type="text" 
            {...register("nombre", {required: "Se requiere nombre de usuario",
                                    pattern: {value: /^[a-zA-Z0-9_-]{4,16}$/,
                                    message: "El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guion bajo.",},
                                    }
                        )
            } className="form-control" id="inputNombre" name="nombre" placeholder="Ingrese su nombre de usuario"/>
            {errors.nombre && (
              <p className='register__input-error'>{errors.nombre.message}</p>
            )}
          </div>
          <div className="form-group" id="grupo__correo">
            <label className="register__label" htmlFor="correo">Correo electrónico</label>
            <input type="email" 
            {...register("correo", {
              required: "Se requiere correo electrónico",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Ingrese un correo electrónico válido",
              },
            })} className="form-control" name="correo" id="inputCorreo" placeholder="Ingrese su correo electrónico"/>
            {errors.correo && (
              <p className='register__input-error'>{errors.correo.message}</p>
            )}
          </div>
          <div className="form-group" id="grupo__password">
            <label className="register__label" htmlFor="inputContra">Contraseña</label>
            <input type="password" 
            {...register("password", {
              required: "Se requiere contraseña",
              minLength: {
                value: 4,
                message: "La contraseña debe tener al menos 4 dígitos",
              },
              maxLength: {
                value: 12,
                message: "La contraseña no puede tener más de 12 dígitos",
              },
            })} className="form-control" name="password" id="password" placeholder="Ingrese su contraseña"/>
            {errors.password && (
              <p className='register__input-error'>{errors.password.message}</p>
            )}
          </div>
          <div className="form-group" id="grupo__password2">
            <label className="register__label" fhtmlFor="inputConfirmar">Confirmar Contraseña</label>
            <input type="password" 
            {...register("password2", {
              required: "Se requiere confirmación de contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })} className="form-control" name="password2" id="password2" placeholder="Repita su contraseña"/>
            {errors.password2 && (
              <p className='register__input-error'>{errors.password2.message}</p>
            )}
          </div>
          {isFormSubmitted && !isValid &&(
            <div className="register__grupo">
              <p id="register__mensaje" className="register__mensaje">
                <b>Error:</b> Por favor rellena el formulario correctamente. 
                </p>
            </div>
          )}
          {isFormSubmitted && isValid && (
            <p className="register__mensaje-exito" id="register__mensaje-exito">Formulario correcto!</p>
          )}
          <div className="register__grupo register__grupo-btn-enviar">
            <button type="submit" className="btn btn-warning">Registrarse</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
