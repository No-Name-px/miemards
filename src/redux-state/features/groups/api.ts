import axios from 'axios';
import {
    createGroupFetchURL,
    groupByIdFetchURL,
    updateGroupFetchURL,
    deleteGroupFetchURL,
    groupByUserFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { AccountDataSend } from 'types';

export function createGroupRequest(data: AccountDataSend, token: string) {
    return axios({
        url: createGroupFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function groupByIdRequest(id: string, token: string) {
    return axios({
        url: groupByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateGroupRequest(
    id: string,
    data: AccountDataSend,
    token: string
) {
    return axios({
        url: updateGroupFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteGroupRequest(id: string, token: string) {
    return axios({
        url: deleteGroupFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function groupsByUserRequest(token: string) {
    return axios({
        url: groupByUserFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
