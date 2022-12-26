import { assert } from "chai";
import HerokuApi from '$root/pages/heroku.api';
import * as data from '$root/data/user.data';

describe('Create Data Booking', () =>{

    it('Should successful login when insert valid data', async () => {
        const response = await HerokuApi.bookingcreate(data.bookingdata);
        assert.equal(response.status, 200);

    })
})