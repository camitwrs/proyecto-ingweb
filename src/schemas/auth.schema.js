import {z} from "zod"

export const registerSchema = z.object({
  nombre: z.string({required_error: "El nombre de usuario es requerido"})
    .min(4, {message: 'El nombre debe tener al menos 4 caracteres'})
    .max(16, {message: 'El nombre debe tener como maximo 16 caracteres'}),
  correo: z.string({required_error: "El correo electronico es requerido"})
    .email({message: 'El correo electronico no es valido'}),
  password: z.string({required_error: "La password es requerida"})
    .min(4, {message: 'La password debe tener al menos 4 caracteres'})
    .max(16, {message: 'La password debe tener como máximo 16 caracteres'}),
  tipoUsuario: z.enum(["Adoptar", "Publicar "])
})

export const loginSchema = z.object({
  correo: z.string({required_error: "El correo electronico es requerido"})
    .email({messsage: 'El correo electronico no es valido'}),
  password: z.string({required_error: "La password es requerida"})
    .min(4, {message: 'La password debe tener al menos 4 caracteres'})
    .max(16, {message: 'La password debe tener como máximo 16 caracteres'})
})