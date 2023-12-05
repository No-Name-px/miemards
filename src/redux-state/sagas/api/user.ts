import axios from 'axios';
import { Register } from 'types';
import { ContentTypes } from '.';
import { userPatchURL } from 'redux-state/constants/user';

export function userUpdateRequest(data: Register, token: string) {
    console.log('sex');
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
