import { type Action } from 'redux-actions';
import { call, takeLatest } from 'redux-saga/effects';
import { GetDecks } from 'types';
import { DecksActions } from 'redux-state/actions';
import { showToast } from 'utiles';
import { decksRequest } from './api';

function* GetDecksWorker(action: Action<GetDecks>) {
    try {
        const { data } = yield call(
            decksRequest,
            action.payload.id,
            action.payload.token
        );
        // yield call(setDecks, data);
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

export default function* watchAuth() {
    yield takeLatest(DecksActions.Type.GET_DECKS, GetDecksWorker);
}
