import BaseApi from "./base.api";

const HerokuApi = {
    
   
    auth: (data)=>BaseApi.post('/auth', data),
    booking: (data) => BaseApi.get('/booking?id=${param}'),
    bookingdel: (data) => BaseApi.delete('/booking/${param}')


}

export default HerokuApi;