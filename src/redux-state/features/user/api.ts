import axios from 'axios';
import { Register } from 'types';
import { ContentTypes } from '../../api';
import { userPatchURL } from 'redux-state/features/user/constants';

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
