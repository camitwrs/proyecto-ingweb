
import { useForm } from 'react-hook-form'

import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';


export const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate()

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();

  // Funcion al apretar submit del form
  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/adoptar");
    }
  }, [isAuthenticated]);

	return (
		<section className='formularioLogin'>
      <h1>Ingresar</h1>
      <p>Bienvenido de vuelta</p>
      {
        loginErrors.map((error, i) => (
          <div className="bg-danger p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" className="form-control"  name="correo" {...register('correo', {
            pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            required: true
          })} />
          <p>{errors.correo?.message}</p>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="contrasenya">Contraseña</label>
          <input type="password" className="form-control" id="contrasenya" name="contrasenya" {...register('contrasenya', {
            required: true
          })} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="button" className="btn btn-warning">Ingresar</button>
      </form>
    </section>
	)
}