import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  correo: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tipoUsuario: {
    type: String
  }
})

export default mongoose.model('User', userSchema)