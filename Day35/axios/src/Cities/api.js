import axios from "axios"

export const  getCities  = (params = {}) => {
   return axios.get("https://peaceful-mesa-39496.herokuapp.com/users",{
       params:{
        _page:params.page,
        _limit:params.limit
       }
   })
}