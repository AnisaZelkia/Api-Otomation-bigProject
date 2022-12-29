import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
import { getParams} from '../helper/lib-api';



describe('BOOKING ID 1', () => {
    it('Should successfull get the booking of data with id = 1', async () => {
        const response = await HerokuApi.booking(data.BOOKING_PARAM);
        assert.equal(response.status, 200);
    });

    it('Should not successfull get the booking of data with invalid id = 0', async () => {
        const response = await HerokuApi.bookingInvalidId(data.INVALID_BOOKING_PARAM);
        assert.equal(response.status, 404);
    });
    
});