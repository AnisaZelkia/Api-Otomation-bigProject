import { assert } from "chai";
import HerokuApi from '../pages/heroku.api';
import * as data from '../data/user.data';

describe('Auth', () =>{

    it('Should successful login and get token when insert valid data', async () => {
        const response = await HerokuApi.auth(data.valid_login);
        assert.equal(response.status, 200);

    }),

    it('Should not successful login and get token when insert invalid email data', async () => {
        const response = await HerokuApi.auth(data.invalid_login);
        assert.equal(response.status, 200);

    }),

    it('Should not successful login and get token when insert invalid password data', async () => {
        const response = await HerokuApi.auth(data.invalid_login_passoword);
        assert.equal(response.status, 200);

    })
})