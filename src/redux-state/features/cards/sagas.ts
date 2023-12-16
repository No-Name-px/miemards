import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CreateCard, GetCards, Token, withRedirect } from 'types';
import {} from 'redux-state/actions';
import { showToast } from 'utiles';
import { cardsByDeckRequest, createCardRequest } from './api';
import { allDecksPath, deckEditPath } from 'router/constants';
import { addCard, createCard, getCards, setCards } from './slice';

function* GetCardsWorker(action: Action<GetCards>) {
    try {
        const { data } = yield call(
            cardsByDeckRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(setCards(data));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

// function* GetDeckWorker(action: Action<GetDeck>) {
//     try {
//         const { data } = yield call(
//             deckByIdRequest,
//             action.payload.id,
//             action.payload.token
//         );
//         yield put(setDeck(data));
//     } catch (error: any) {
//         console.log(error);
//         const massageArray =
//             typeof error.response.data.detail !== 'string'
//                 ? error.response.data.detail?.map((det: any) => det.msg)
//                 : [error.response.data.detail] || ['Неизвестная ошибка'];
//         for (const msg of massageArray) {
//             showToast(msg, 'error');
//         }
//     }
// }

// function* DeleteDeckWorker(action: Action<withRedirect<string> & Token>) {
//     try {
//         const { data } = yield call(
//             deleteDeckRequest,
//             action.payload.data,
//             action.payload.token
//         );
//         yield put(removeDeck(data));
//         showToast(`Колода удалена`, 'success');
//         action.payload.navigate(allDecksPath);
//     } catch (error: any) {
//         console.log(error);
//         const massageArray =
//             typeof error.response.data.detail !== 'string'
//                 ? error.response.data.detail?.map((det: any) => det.msg)
//                 : [error.response.data.detail] || ['Неизвестная ошибка'];
//         for (const msg of massageArray) {
//             showToast(msg, 'error');
//         }
//     }
// }

function* CreateCardWorker(action: Action<withRedirect<CreateCard> & Token>) {
    try {
        console.log('sex');
        const { data } = yield call(
            createCardRequest,
            action.payload.data,
            action.payload.token
        );
        yield call(addCard, {
            ...action.payload.data,
            id: data.id,
        });
        action.payload.navigate(deckEditPath(action.payload.data.deck_id));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data?.detail?.map((det: any) => det.msg)
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

// function* UpdateDeckWorker(action: Action<withRedirect<AddDeck> & Token>) {
//     try {
//         yield call(
//             updateDeckRequest,
//             action.payload.data.id,
//             {
//                 description: action.payload.data.description,
//                 name: action.payload.data.name,
//             },
//             action.payload.token
//         );
//         yield call(addDeck, {
//             name: action.payload.data.name,
//             description: action.payload.data.description,
//             id: action.payload.data.id,
//         });
//         action.payload.navigate(deckPath(action.payload.data.id));
//     } catch (error: any) {
//         console.log(error);
//         const massageArray =
//             typeof error.response.data.detail !== 'string'
//                 ? error.response.data.detail?.map((det: any) => det.msg)
//                 : [error.response.data.detail] || ['Неизвестная ошибка'];
//         for (const msg of massageArray) {
//             showToast(msg, 'error');
//         }
//     }
// }

export default function* watchCards() {
    yield takeLatest(getCards, GetCardsWorker);
    // yield takeLatest(loadDeck, GetDeckWorker);
    yield takeLatest(createCard, CreateCardWorker);
    // yield takeLatest(deleteDeck, DeleteDeckWorker);
    // yield takeLatest(editDeck, UpdateDeckWorker);
}
