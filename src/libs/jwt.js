import { SECRET_TOKEN } from "../globalconfig.js";
import jwt from "jsonwebtoken"

export function createAccesToken(payload){
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_TOKEN, 
      {
        expiresIn: "1d",
      }, 
      (error, token) => {
        if(error) reject(error);
        resolve(token);
      }
    );
  })
}

