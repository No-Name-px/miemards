import axios from 'axios';
import {
    createSocialAccountFetchURL,
    socialAccountByIdFetchURL,
    socialAccountUpdateFetchURL,
    socialAccountDeleteFetchURL,
    socialAccountByUserFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { AccountDataSend } from 'types';

export function createSocialAccountRequest(
    data: AccountDataSend,
    token: string
) {
    return axios({
        url: createSocialAccountFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function socialAccountByIdRequest(id: string, token: string) {
    return axios({
        url: socialAccountByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateSocialAccountRequest(
    id: string,
    data: AccountDataSend,
    token: string
) {
    return axios({
        url: socialAccountUpdateFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteSocialAccountRequest(id: string, token: string) {
    return axios({
        url: socialAccountDeleteFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function socialAccountByUserRequest(token: string) {
    return axios({
        url: socialAccountByUserFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
