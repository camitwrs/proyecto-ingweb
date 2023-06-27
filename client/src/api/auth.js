import axios from "axios"

const API = "http://127.0.0.1:3000/api"

export const registerRequest = async (user) => axios.post(`${API}/register`, user)

export const loginRequest = async (user) => axios.post(`${API}/login`, user)

export const verifyTokenRequest = async () => axios.get(`${API}/verify`);

// falta api/publications.js del frontend