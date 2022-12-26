import { json } from "stream/consumers";
import BaseApi from "./base.api";

const HerokuApi = {
    
   
    auth: (data)=>BaseApi.post('/auth', data),
    booking: (data) => BaseApi.get('/booking?id=${param}'),
<<<<<<< HEAD
    bookingdel: (data) => BaseApi.delete('/booking/2', data),
    bookingcreate: (data) => BaseApi.post('/booking', data),
    bookingget: (data) => BaseApi.get('/booking', data),
    bookingput: (data) => BaseApi.put('/booking/2', data)


=======
    bookingdel: (data) => BaseApi.delete('/booking/${param}'),
    createbooking: (data) => BaseApi.post('/booking', data),
    partialupdatebooking : (data) => BaseApi.patch('/booking/1', data),
>>>>>>> 22c0e8db702018125e596ac945bcffbc0d59152d


}

export default HerokuApi;