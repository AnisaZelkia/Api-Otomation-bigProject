import { json } from "stream/consumers";
import BaseApi from "./base.api";

const HerokuApi = {
    
   
    auth: (data)=>BaseApi.post('/auth', data),
    booking: (data) => BaseApi.get('/booking?id=${param}'),
    bookingdel: (data) => BaseApi.delete('/booking/2', data),
    bookingcreate: (data) => BaseApi.post('/booking', data),
    bookingget: (data) => BaseApi.get('/booking', data),
    bookingput: (data) => BaseApi.put('/booking/2', data),
    bookingdel: (data) => BaseApi.delete('/booking/${param}'),
    createbooking: (data) => BaseApi.post('/booking/', data),
    partialupdatebooking : (data) => BaseApi.patch('/booking/${param}', data),



}

export default HerokuApi;