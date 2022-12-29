import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';

describe('Auth', () =>{

    it('Should successful login when insert valid data', async () => {
        const response = await HerokuApi.auth(data.valid_login);
        assert.equal(response.status, 200);

    })
})