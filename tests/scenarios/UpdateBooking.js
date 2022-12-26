import { assert } from "chai";
import HerokuApi from '$root/pages/heroku.api';
import * as data from '$root/data/user.data';
import { getParams} from '$helper/lib-api';


describe('PUT Booking Data ID 3', () => {
    it('Should successfull PUT the booking of data with id = 3', async () => {
        const response = await HerokuApi.bookingput(data.bookingupdate);
        assert.equal(response.status, 200);


        
    });
});