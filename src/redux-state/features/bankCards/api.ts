import axios from 'axios';
import {
    createBankCardFetchURL,
    bankCardByIdFetchURL,
    bankCardUpdateFetchURL,
    deleteBankCardFetchURL,
    cardsByUserFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { BankCard } from 'types';

export function createBankCardRequest(data: BankCard, token: string) {
    return axios({
        url: createBankCardFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function bankcardByIdRequest(id: string, token: string) {
    return axios({
        url: bankCardByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateBankCardRequest(
    id: string,
    data: BankCard,
    token: string
) {
    return axios({
        url: bankCardUpdateFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteBankCardRequest(id: string, token: string) {
    return axios({
        url: deleteBankCardFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function bankCardsByUserRequest(token: string) {
    return axios({
        url: cardsByUserFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
