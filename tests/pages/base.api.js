import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseApi = axios.create({
    baseURL :process.env.BASE_URL,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : "YWRtaW46cGFzc3dvcmQxMjM=]",
        "Cookie" : "token=5cc89c89e850c6b",
    },
    validateStatus: function () {
        return true;
    }
})

const BaseApiPacth = axios.create({
    baseURL :process.env.BASE_URL,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Cookie" : "token=5cc89c89e850c6b",
    },
    validateStatus: function () {
        return true;
    }
})

export default BaseApi;