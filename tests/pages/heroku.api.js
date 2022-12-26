import BaseApi from "./base.api";

const HerokuApi = {
    
   
    auth: (data)=>BaseApi.post('/auth', data),
    booking: (data) => BaseApi.get('/booking?id=${param}'),
    bookingdel: (data) => BaseApi.delete('/booking/${param}'),
    createbooking: (data) => BaseApi.post('/booking', data),
    partialupdatebooking : (data) => BaseApi.patch('/booking/1', data),


}

export default HerokuApi;