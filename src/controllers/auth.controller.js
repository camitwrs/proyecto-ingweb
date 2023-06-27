import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccesToken } from "../libs/jwt.js"

export const register = async (req, res) => {

  try {
    const {nombre, correo, password, tipoUsuario} = req.body;

    const userFound = await User.findOne({correo})
    if(userFound) return res.status(400).json(['El email ya esta en uso'])

    // se encripta la password
    const passwordHash = await bcrypt.hash(password, 5); 

    // se crea un nuevo usuario
    const newUser = new User({ 
      nombre,
      correo,
      password: passwordHash,
      tipoUsuario
    })

    // se guarda en la bd
    const userSaved = await newUser.save(); 

    // se crea el token (ticket o pase para saber si el usuario esta registrado ya o no)
    const token = await createAccesToken({id: userSaved._id}); 

    // se guarda el token en una cookie 
    res.cookie("token", token);

    // se envia la respuesta hacia el frontend
    res.json({
      id: userSaved._id,
      nombre: userSaved.nombre,
      correo: userSaved.correo,
    });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  
  try {
    const {correo, password} = req.body;
    // se busca en los usuarios de la bd el que tenga el email ingresado
    const userFound = await User.findOne({correo});
    if(!userFound) return res.status(400).json({message: ['El correo no existe']});

    // se compara la password ingresada con la registrada en la bd
    const isTheSame = await bcrypt.compare(password, userFound.password); 
    if(!isTheSame) return res.status(400).json({message: ["Password incorrecta"]})

    // se crea el token (ticket o pase para saber si el usuario esta registrado ya o no)
    const token = await createAccesToken({id: userFound._id}); 

    // se guarda el token en una cookie 
    res.cookie("token", token);

    // se envia el usuario logeado al frontend
    res.json({ 
      id: userFound._id,
      correo: userFound.correo,
      nombre: userFound.nombre
    });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  // se borra el token ya que ha cerrado sesion
  res.cookie("token", "", {expires: new Date(0)});
  return res.sendStatus(200);
}

export const getProfile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

  return res.json({
    id: userFound._id,
    correo: userFound.correo,
    nombre: userFound.nombre 
  })
}