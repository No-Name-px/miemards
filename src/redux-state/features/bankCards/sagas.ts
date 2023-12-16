import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { BankCard, GetDecks, Token } from 'types';
import {
    setBankCards,
    getBankCards,
    createBankCard,
    addBankCard,
    editBankCard,
    deleteBankCard,
    removeBankCard,
} from 'redux-state/actions';
import { showToast } from 'utiles';
import {
    createBankCardRequest,
    updateBankCardRequest,
    deleteBankCardRequest,
    bankCardsByUserRequest,
} from './api';

function* GetBankCardsWorker(action: Action<GetDecks>) {
    try {
        const { data } = yield call(
            bankCardsByUserRequest,
            action.payload.token
        );
        yield put(setBankCards(data));
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

function* DeleteBankCardsWorker(action: Action<{ id: string } & Token>) {
    try {
        const { data } = yield call(
            deleteBankCardRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(removeBankCard(data));
        showToast(`Удалено`, 'success');
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

function* CreateBankCardsWorker(action: Action<BankCard & Token>) {
    try {
        const { data } = yield call(
            createBankCardRequest,
            {
                cvv: action.payload.cvv,
                exp_date: action.payload.exp_date,
                number: action.payload.number,
            },
            action.payload.token
        );
        yield call(addBankCard, {
            cvv: action.payload.cvv,
            exp_date: action.payload.exp_date,
            number: action.payload.number,
            id: data.id,
        });
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

function* UpdateBankCardsWorker(
    action: Action<BankCard & Token & { id: string }>
) {
    try {
        yield call(
            updateBankCardRequest,
            action.payload.id,
            {
                cvv: action.payload.cvv,
                exp_date: action.payload.exp_date,
                number: action.payload.number,
            },
            action.payload.token
        );
        yield call(addBankCard, {
            cvv: action.payload.cvv,
            exp_date: action.payload.exp_date,
            number: action.payload.number,
            id: action.payload.id,
        });
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
    yield takeLatest(getBankCards, GetBankCardsWorker);
    yield takeLatest(createBankCard, CreateBankCardsWorker);
    yield takeLatest(deleteBankCard, DeleteBankCardsWorker);
    yield takeLatest(editBankCard, UpdateBankCardsWorker);
}
