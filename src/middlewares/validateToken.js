import jwt from "jsonwebtoken"
import { SECRET_TOKEN } from "../globalconfig.js";

//para proteger las rutass
//para que no pueda a entrar a rutas en donde no este logeado
//solo entra si esta logeado = si tiene token

export const authRequired = (req, res, next) => {

  const {token} = req.cookies;
  if(!token) return res.status(401).json({message: "no hay token, acceso denegado"})

  jwt.verify(token, SECRET_TOKEN, (error, user) => {
    if (error) return res.status(401).json({message: "token invalido"});
    
    req.user = user;
    
    next();
  })
}