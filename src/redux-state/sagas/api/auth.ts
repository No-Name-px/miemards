import axios from 'axios';
import { Login, Register } from 'types';
import { ContentTypes } from '.';
import { loginFetchURL, registerFetchURL } from '../../constants';

export function loginRequest(data: Login) {
    return axios({
        url: loginFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}

export function registerRequest(data: Register) {
    return axios({
        url: registerFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}
