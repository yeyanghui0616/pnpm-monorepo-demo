
export const userApi = {
    getUser:(id)=>{
        api.get(`/api/users/${id}`)
    }
}