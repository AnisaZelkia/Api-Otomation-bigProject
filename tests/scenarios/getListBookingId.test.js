import { assert } from "chai";
import HerokuApi from '$root/pages/heroku.api';
import * as data from '$root/data/user.data';
//import { getParams} from '$helper/lib-api';


describe('BOOKING ID LIST', () => {
    it('Should successfull get the booking of data ', async () => {
        const response = await HerokuApi.bookingget(data.bookingdata);
        assert.equal(response.status, 200);
    });
});