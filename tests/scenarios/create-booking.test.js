import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';

describe('Create Booking', () =>{

    it('Must successfully make a reservation when entering valid data', async () => {
        const response = await HerokuApi.createbooking(data.bookingdata);

        assert.equal(response.status, 200);

    })
})