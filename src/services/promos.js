import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "/promos")
  : (baseURL = "http://localhost:3000/promos")

const service = axios.create({ withCredentials: true, baseURL })

export const getPromos = async () => {
  return await service.get("/")
}
export const getOnePromo = async promoId => {
  return await service.get(`/${promoId}`)
}

export const createPromo = async PromoInfo => {
  return await service.post("/promos/new", PromoInfo)
}

 
  export const updatePromo = async (promoId, promoInfo) => {
    return await service.put(`/${promoId}`, promoInfo)
  }

  export const addParticipants = async promoId => {
    return await service.post(`/participant/${promoId}`)
  }

  export const setPromoWinner = async promoId => {
    return await service.post(`/end/${promoId}`)
  }
 
  export const deletePromo = async promoId => {
    return await service.delete(`/${promoId}`)
  }


