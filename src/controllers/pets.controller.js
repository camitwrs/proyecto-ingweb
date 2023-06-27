import Pet from "../models/pet.model.js"

//obtener las mascotas del usuario logeado
export const getPets = async (req, res) => {
  const pets = await Pet.find({user: req.user.id}).populate('user')
  res.json(pets)
}

export const getPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id)
  if (!pet) return res.status(404).json({message: "mascota no encontrada"})
  res.json(pet) 
}

export const createPet = async (req, res) => {
  const {
    publicante,
    tipo,
    sexo,
    nombre,
    ciudad,
    tamano,
    antecedentes,
    descripcion,
    fotos
  } = req.body

  const newPet = new Pet({
    publicante: req.user.id,
    tipo,
    sexo,
    nombre,
    ciudad,
    tamano,
    antecedentes,
    descripcion,
    fotos
  })

  savedPet = await newPet.save()
  res.json(savedPet)
}

export const deletePet = async (req, res) => {
  const deletedPet = await Pet.findByIdAndDelete(req.params.id)
  if (!deletedPet) return res.status(404).json({message: "mascota no encontrada"})
  return res.status(204).json({message: "mascota eliminada"})
}

export const updatePet = async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})

  if (!pet) return res.status(404).json({message: "mascota no encontrada"})
  res.json(pet) 
}