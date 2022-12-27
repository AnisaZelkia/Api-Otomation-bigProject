import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
import { getParams} from '../helper/lib-api';



describe('BOOKING ID 1', () => {
    it('Should successfull get the booking of data with id = 1', async () => {
        const param = getParams(data.BOOKING_PARAM['id']);
        const response = await HerokuApi.booking(param);
        assert.equal(response.status, 200);
    });
});