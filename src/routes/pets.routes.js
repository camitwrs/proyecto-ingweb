import { Router } from "express"
import { getPets, getPet, createPet, deletePet, updatePet } from '../controllers/pets.controller.js'
import { authRequired } from "../middlewares/validateToken.js"

const router = Router()

// CRUD para las mascotas
router.get('/pets', authRequired, getPets)

router.get('/pets/:id', authRequired, getPet)

router.post('/pets/', authRequired, createPet)

router.delete('/pets/:id', authRequired, deletePet)

router.put('/pets/:id', authRequired, updatePet)

export default router