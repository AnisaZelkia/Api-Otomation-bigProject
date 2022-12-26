import BaseApi from "./base.api";

const ReqresApi = {
    register: (data) => BaseApi.post('/register', data),
   
    login: (data)=>BaseApi.post('/auth', data)

}

export default ReqresApi;