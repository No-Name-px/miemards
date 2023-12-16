import axios from 'axios';
import {
    createCardFetchURL,
    cardByIdFetchURL,
    cardUpdateFetchURL,
    deleteCardFetchURL,
    cardsFromDeckFetchURL,
    generateCardImageFetchURL,
    generateCardTranslateFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';
import { CreateCard } from 'types';

export function createCardRequest(data: CreateCard, token: string) {
    return axios({
        url: createCardFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function cardByIdRequest(id: string, token: string) {
    return axios({
        url: cardByIdFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateCardRequest(id: string, data: CreateCard, token: string) {
    return axios({
        url: cardUpdateFetchURL(id),
        method: 'PATCH',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}

export function deleteCardRequest(id: string, token: string) {
    return axios({
        url: deleteCardFetchURL(id),
        method: 'DELETE',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function cardsByDeckRequest(deckid: string, token: string) {
    return axios({
        url: cardsFromDeckFetchURL(deckid),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function cardTranslationRequest(id: string, token: string) {
    return axios({
        url: generateCardTranslateFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function cardImageRequest(id: string, token: string) {
    return axios({
        url: generateCardImageFetchURL(id),
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
