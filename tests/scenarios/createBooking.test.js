import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';

describe('Create Data Booking', () =>{

    it('Should successful login when insert valid data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata);
        assert.equal(response.status, 200);

    })

    it('Should not successful login when insert invalid first name data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata1);
        assert.equal(response.status, 500);

    })

    it('Should not successful login when insert invalid last name data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata2);
        assert.equal(response.status, 500);

    })

    it('Should not successful login when insert invalid total price data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata3);
        assert.equal(response.status, 500);

    })

    it('Should not successful login when insert invalid check in data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata4);
        assert.equal(response.status, 500);

    })

    it('Should not successful login when insert invalid check out data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata5);
        assert.equal(response.status, 500);

    })
})