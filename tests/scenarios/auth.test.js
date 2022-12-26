import { assert } from "chai";
import ReqresApi from "../pages/reqres.api";
import * as data from "../data/user.data"

describe('Auth', () =>{

    it.only('Should successful login when insert valid data', async () => {
        const response = await ReqresApi.auth(data.valid_login);

        assert.equal(response.status, 200);

    })
})