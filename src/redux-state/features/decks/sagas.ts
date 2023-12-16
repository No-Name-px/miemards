import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    AddDeck,
    CreateDeck,
    GetDeck,
    GetDecks,
    Token,
    withRedirect,
} from 'types';
import {
    setDecks,
    addDeck,
    getDecks,
    createDeck,
    loadDeck,
    setDeck,
    deleteDeck,
    removeDeck,
    editDeck,
} from 'redux-state/actions';
import { showToast } from 'utiles';
import {
    createDeckRequest,
    deckByIdRequest,
    decksByUserRequest,
    deleteDeckRequest,
    updateDeckRequest,
} from './api';
import { allDecksPath, deckPath } from 'router/constants';

function* GetDecksWorker(action: Action<GetDecks>) {
    try {
        const { data } = yield call(decksByUserRequest, action.payload.token);
        yield put(setDecks(data));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error.response.data.detail !== 'string'
                ? error.response.data.detail?.map((det: any) => det.msg)
                : [error.response.data.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* GetDeckWorker(action: Action<GetDeck>) {
    try {
        const { data } = yield call(
            deckByIdRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(setDeck(data));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error.response.data.detail !== 'string'
                ? error.response.data.detail?.map((det: any) => det.msg)
                : [error.response.data.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* DeleteDeckWorker(action: Action<withRedirect<string> & Token>) {
    try {
        const { data } = yield call(
            deleteDeckRequest,
            action.payload.data,
            action.payload.token
        );
        yield put(removeDeck(data));
        showToast(`Колода удалена`, 'success');
        action.payload.navigate(allDecksPath);
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error.response.data.detail !== 'string'
                ? error.response.data.detail?.map((det: any) => det.msg)
                : [error.response.data.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* CreateDeckWorker(action: Action<withRedirect<CreateDeck> & Token>) {
    try {
        const { data } = yield call(
            createDeckRequest,
            {
                description: action.payload.data.description,
                name: action.payload.data.name,
            },
            action.payload.token
        );
        yield call(addDeck, {
            name: action.payload.data.name,
            description: action.payload.data.description,
            id: data.id,
        });
        action.payload.navigate(allDecksPath);
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error.response.data.detail !== 'string'
                ? error.response.data.detail?.map((det: any) => det.msg)
                : [error.response.data.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* UpdateDeckWorker(action: Action<withRedirect<AddDeck> & Token>) {
    try {
        yield call(
            updateDeckRequest,
            action.payload.data.id,
            {
                description: action.payload.data.description,
                name: action.payload.data.name,
            },
            action.payload.token
        );
        yield call(addDeck, {
            name: action.payload.data.name,
            description: action.payload.data.description,
            id: action.payload.data.id,
        });
        action.payload.navigate(deckPath(action.payload.data.id));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error.response.data.detail !== 'string'
                ? error.response.data.detail?.map((det: any) => det.msg)
                : [error.response.data.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

export default function* watchDecks() {
    yield takeLatest(getDecks, GetDecksWorker);
    yield takeLatest(loadDeck, GetDeckWorker);
    yield takeLatest(createDeck, CreateDeckWorker);
    yield takeLatest(deleteDeck, DeleteDeckWorker);
    yield takeLatest(editDeck, UpdateDeckWorker);
}
