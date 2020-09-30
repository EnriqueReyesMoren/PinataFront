import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "/assets")
  : (baseURL = "http://localhost:3000/assets")

const service = axios.create({ withCredentials: true, baseURL })

export const getAssets = async () => {
  return await service.get("/")
}
export const getOneAsset = async assetId => {
  return await service.get(`/${assetId}`)
}

export const createAsset = async AssetsInfo => {
  return await service.post("/create", AssetsInfo)
}

 
  export const updateAsset = async (assetsId, assetsInfo) => {
    return await service.post(`/${assetsId}`, assetsInfo)
  }