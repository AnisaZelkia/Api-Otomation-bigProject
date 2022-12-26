import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
import { getParams} from '$helper/lib-api';

describe('update Booking partial', () =>{

    it('Must successfully make a reservation when entering valid data', async () => {
        const response = await HerokuApi.partialupdatebooking(data.bookingdatapartial);

        assert.equal(response.status, 200);

    })
})