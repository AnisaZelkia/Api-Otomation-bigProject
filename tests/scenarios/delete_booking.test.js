import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
//import { getParams} from '../lib-api';

describe('Delete BOOKING ID 1', () => {
    it.skip('Should successfull delete the booking of data with id = 2', async () => {
        const response = await HerokuApi.bookingdel(data.delParam);
        assert.equal(response.status, 200);
    });
});