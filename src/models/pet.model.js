import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  publicante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  tamano: {
    type: String,
    required: true
  },
  antecedentes: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fotos: {
    type: [String],
    required: true
  },
  interesados: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  },
})

export default mongoose.model('Pet', petSchema)