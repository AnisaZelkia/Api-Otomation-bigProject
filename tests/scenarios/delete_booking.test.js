import { assert } from "chai";
import HerokuApi from '$root/pages/heroku.api';
import * as data from '$root/data/user.data';
import { getParams} from '$helper/lib-api';




describe('Delete BOOKING ID 1', () => {
    it('Should successfull delete the booking of data with id = 2', async () => {
        const response = await HerokuApi.bookingdel(data.delParam);
        assert.equal(response.status, 200);
    });
});