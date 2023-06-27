import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

export const RegisterPage = () => {

  const {signup, isAuthenticated, errors: registerErrors} = useAuth()
  const { register, watch, handleSubmit, formState:{errors }}= useForm();
  const [selectedOption, setSelectedOption] = useState('Adoptar');

  const navigate = useNavigate()

  const onSubmit = async (value) => {
    await signup(value);
  }

  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value);
  }

  useEffect(() => {
    if(isAuthenticated) navigate("/adoptar")
  }, [isAuthenticated])

  return (
    <section>
      <h1>Registrarse</h1>
      <p>A ponerse peludos!</p>
      {
        registerErrors.map((error, i) => (
          <div className="bg-danger p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
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
              <p className='text-danger'>{errors.nombre.message}</p>
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
            {errors.correo?.message && (
            <p className="text-danger">{errors.email?.message}</p>
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
              <p className='p-error'>{errors.password.message}</p>
            )}
          </div>
          <div className="form-group" id="grupo__password2">
            <label className="register__label" htmlFor="inputConfirmar">Confirmar Contraseña</label>
            <input type="password" 
            {...register("password2", {
              required: "Se requiere confirmación de contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })} className="form-control" name="password2" id="password2" placeholder="Repita su contraseña"/>
            {errors.password2 && (
              <p className='p-error'>{errors.password2.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-warning">Registrarse</button>
        </fieldset>
      </form>
    </section>
  );
};
