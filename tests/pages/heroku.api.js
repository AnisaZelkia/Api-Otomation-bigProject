import BaseApi from "./base.api";

const HerokuApi = {
    
   
    auth: (data)=>BaseApi.post('/auth', data)

}

export default HerokuApi;