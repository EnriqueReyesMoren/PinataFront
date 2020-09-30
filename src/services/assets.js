import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "https://pinatastock.herokuapp.com/assets")
  : (baseURL = "http://localhost:3000/assets")

const service = axios.create({ withCredentials: true, baseURL })

export const getAssets = async () => {
  return await service.get("/")
}

export const getAsset = async assetsId => {
  return await service.get(`/${assetsId}`)
}

export const createAsset = async assetsInfo => {
  return await service.post("/create", assetsInfo)
}

 
  export const updateAsset = async (assetsId, assetsInfo) => {
    return await service.post(`/${assetsId}`, assetsInfo)
  }