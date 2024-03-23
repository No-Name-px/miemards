import axios from 'axios';
import {
    createDeckURL,
    decksFetchURL,
    generateCardForDeckFetchURL,
    deckByIdFetchURL,
    decksDeleteFetchURL,
    deckUpdateFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { CreateDeck } from 'types';

export function createDeckRequest(data: CreateDeck, token: string) {
    return axios({
        url: createDeckURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deckByIdRequest(id: string, token: string) {
    return axios({
        url: deckByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateDeckRequest(id: string, data: CreateDeck, token: string) {
    return axios({
        url: deckUpdateFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteDeckRequest(id: string, token: string) {
    return axios({
        url: decksDeleteFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function decksByUserRequest(token: string) {
    return axios({
        url: decksFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function deckCardGenerationRequest(
    word: string,
    deckId: string,
    token: string
) {
    return axios({
        url: generateCardForDeckFetchURL(word, deckId),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
