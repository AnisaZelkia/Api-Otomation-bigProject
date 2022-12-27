import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';
import { getParams} from '../helper/lib-api';

describe('update Booking partial', () =>{

    it('Must successfully make a reservation when entering valid data', async () => {
        const param = getParams(data.bookingdatapartial);
        const response = await HerokuApi.partialupdatebooking(1);
        
        assert.equal(response.status, 200);
        //console.log(response.data)
    })
})