import axios from 'axios';
import {
    createInterestFetchURL,
    interestByIdFetchURL,
    updateInterestFetchURL,
    deleteInterestFetchURL,
    interestByUserFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { Interest } from 'types';

export function createInterestRequest(data: Interest, token: string) {
    return axios({
        url: createInterestFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function interestByIdRequest(id: string, token: string) {
    return axios({
        url: interestByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateInterestRequest(
    id: string,
    data: Interest,
    token: string
) {
    return axios({
        url: updateInterestFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteInterestRequest(id: string, token: string) {
    return axios({
        url: deleteInterestFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function interestsByUserRequest(token: string) {
    return axios({
        url: interestByUserFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
