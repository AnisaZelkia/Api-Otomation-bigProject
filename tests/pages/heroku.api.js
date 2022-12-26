import BaseApi from "./base.api";

const HerokuApi = {
    
   
    login: (data)=>BaseApi.post('/auth', data)

}

export default HerokuApi;