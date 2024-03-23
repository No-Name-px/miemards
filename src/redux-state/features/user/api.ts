import axios from 'axios';
import { Register } from 'types';
import { ContentTypes } from '../../api';
import {
    userPatchURL,
    userGetURL,
    userDeleteURL,
    generateDeckURL,
} from 'redux-state/features/user/constants';

export function userGetRequest(token: string) {
    return axios({
        url: userGetURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function userUpdateRequest(data: Register, token: string) {
    return axios({
        url: userPatchURL,
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function userDeleteRequest(token: string) {
    return axios({
        url: userDeleteURL,
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function generateDeckRequest(word: string, token: string) {
    return axios({
        url: generateDeckURL(word),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
