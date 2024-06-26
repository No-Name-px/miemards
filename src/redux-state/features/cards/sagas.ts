import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    Card,
    CardFormValues,
    CreateCard,
    GetCard,
    GetCards,
    Token,
    withRedirect,
} from 'types';
import {} from 'redux-state/actions';
import { showToast } from 'utiles';
import {
    cardByIdRequest,
    cardImageRequest,
    cardTranslationRequest,
    cardsByDeckRequest,
    createCardRequest,
    deleteCardRequest,
    updateCardRequest,
} from './api';
import { cardPath, deckEditPath, deckPath } from 'router/constants';
import {
    addCard,
    createCard,
    deleteCard,
    editCard,
    getCards,
    getImage,
    getTranslation,
    loadCard,
    removeCard,
    setCard,
    setCards,
    setImage,
    setTranslation,
} from './slice';

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

function* GetCardWorker(action: Action<GetCard>) {
    try {
        const { data } = yield call(
            cardByIdRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(setCard(data));
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

function* DeleteCardWorker(
    action: Action<
        | (withRedirect<{ deckId: string; id: string }> & Token)
        | ({ data: { deckId: string; id: string } } & Token)
    >
) {
    try {
        const { data } = yield call(
            deleteCardRequest,
            action.payload.data.id,
            action.payload.token
        );
        yield put(removeCard(action.payload.data.id));
        showToast(`Карта удалена`, 'success');
        if ('navigate' in action.payload)
            action.payload.navigate(deckPath(action.payload.data.deckId));
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

function* CreateCardWorker(action: Action<withRedirect<CreateCard> & Token>) {
    try {
        const { data } = yield call(
            createCardRequest,
            {
                english_word: action.payload.data.english_word,
                translation: action.payload.data.translation,
                image: action.payload.data.image ?? null,
                explanation: action.payload.data.explanation,
                deck_id: action.payload.data.deck_id,
            },
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

function* UpdateCardWorker(action: Action<withRedirect<Card> & Token>) {
    try {
        yield call(
            updateCardRequest,
            action.payload.data.id,
            {
                translation: action.payload.data.translation,
                english_word: action.payload.data.english_word,
                deck_id: action.payload.data.deck_id,
                explanation: action.payload.data.explanation,
                image: action.payload.data.image ?? null,
            },
            action.payload.token
        );
        yield call(addCard, {
            translation: action.payload.data.translation,
            english_word: action.payload.data.english_word,
            deck_id: action.payload.data.deck_id,
            explanation: action.payload.data.explanation,
            id: action.payload.data.id,
        });
        action.payload.navigate(
            cardPath(action.payload.data.deck_id, action.payload.data.id)
        );
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

function* GetCardTranslation(action: Action<{ card: CardFormValues } & Token>) {
    try {
        const { data } = yield call(
            cardTranslationRequest,
            action.payload.card.translation,
            action.payload.token
        );
        yield put(
            setTranslation({
                ...action.payload.card,
                english_word: (data.message as string)
                    .toLowerCase()
                    .replace('.', ''),
            })
        );
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

function* GetCardImage(action: Action<{ card: CardFormValues } & Token>) {
    try {
        const { data } = yield call(
            cardImageRequest,
            action.payload.card.translation,
            action.payload.token
        );
        yield put(
            setImage({
                ...action.payload.card,
                image: data.url,
            })
        );
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

export default function* watchCards() {
    yield takeLatest(getCards, GetCardsWorker);
    yield takeLatest(loadCard, GetCardWorker);
    yield takeLatest(createCard, CreateCardWorker);
    yield takeLatest(deleteCard, DeleteCardWorker);
    yield takeLatest(editCard, UpdateCardWorker);
    yield takeLatest(getTranslation, GetCardTranslation);
    yield takeLatest(getImage, GetCardImage);
}
