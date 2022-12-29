import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';

describe('BOOKING ID LIST', () => {
    it('Should successfull get all the booking of data ', async () => {
        const response = await HerokuApi.bookingget(data);
    
        assert.equal(response.status, 200);
    });
});