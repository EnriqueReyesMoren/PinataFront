import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "https://pinatastock.herokuapp.com/promos")
  : (baseURL = "http://localhost:3000/promos")

const service = axios.create({ withCredentials: true, baseURL })

export const getPromos = async () => {
  return await service.get("/")
}
export const getPromo = async promoId => {
  const {data: promos} =await service.get(`/${promoId}`)
  return promos
}

export const createPromo = async PromoInfo => {
  return await service.post("/new", PromoInfo)
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


