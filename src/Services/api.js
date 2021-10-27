import axios from "axios";

export const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

//https://sujeitoprogramador.com/r-api/?api=filmes