import api from './api'

export const XuserApi = {
    getUser:(id:number)=>api.get(`/api/users/${id}`),
    createUser:(data:Record<string, any>)=>api.post(`/api/users`,data)
    
}