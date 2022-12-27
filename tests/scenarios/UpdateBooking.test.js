import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
//import { getParams} from '$helper/lib-api';


describe('PUT Booking Data ID 3', () => {
    it('Should successfull PUT the booking of data with id = 3', async () => {
        const response = await HerokuApi.bookingput(data.bookingupdate);
        assert.equal(response.status, 200);


        
    });
});