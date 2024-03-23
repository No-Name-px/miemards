import axios from 'axios';
import {
    createPostFetchURL,
    postByIdFetchURL,
    editPostFetchURL,
    deletePostFetchURL,
    postByUserFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { AccountDataSend, PostReq } from 'types';

export function createPostRequest(data: PostReq, token: string) {
    return axios({
        url: createPostFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function postByIdRequest(id: string, token: string) {
    return axios({
        url: postByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updatePostRequest(id: string, data: PostReq, token: string) {
    return axios({
        url: editPostFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deletePostRequest(id: string, token: string) {
    return axios({
        url: deletePostFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function postsByUserRequest(token: string) {
    return axios({
        url: postByUserFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
