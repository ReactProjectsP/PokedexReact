import axios from "axios"

const baseURL = "https://pokeapi.co/api/v2"
// Create a new axios instance

export const axiosInstance = axios.create({
  baseURL: baseURL,
})
