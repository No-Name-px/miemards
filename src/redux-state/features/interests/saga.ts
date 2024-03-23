import { call, put, takeLatest } from 'redux-saga/effects';
import {
    createInterest,
    deleteInterest,
    getInterest,
    getInterests,
    setInterest,
    setInterests,
    updateInterest,
} from './slice';
import { showToast } from 'utiles';
import { type Action } from 'redux-actions';
import { Interest, Token, withRedirect } from 'types';
import {
    createInterestRequest,
    deleteInterestRequest,
    interestByIdRequest,
    interestsByUserRequest,
    updateInterestRequest,
} from './api';
import { profileInterestsPath } from 'router/constants';
import { interestByIdFetchURL } from './constants';

function* GetInterestsWorker(action: Action<Token>) {
    try {
        const { data } = yield call(
            interestsByUserRequest,
            action.payload.token
        );
        yield put(setInterests(data));
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

function* GetInterestWorker(action: Action<{ id: string } & Token>) {
    try {
        const { data } = yield call(
            interestByIdRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(setInterest(data));
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

function* CreateInterestWorker(action: Action<withRedirect<Interest> & Token>) {
    try {
        const { data } = yield call(
            createInterestRequest,
            action.payload.data,
            action.payload.token
        );
        action.payload.navigate(profileInterestsPath);
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

function* UpdateInterestWorker(
    action: Action<withRedirect<Interest & { id: string }> & Token>
) {
    try {
        const { data } = yield call(
            updateInterestRequest,
            action.payload.data.id,
            {
                name: action.payload.data.name,
                description: action.payload.data.description,
            },
            action.payload.token
        );
        action.payload.navigate(profileInterestsPath);
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

function* DeleteInterestWorker(action: Action<withRedirect<string> & Token>) {
    try {
        const { data } = yield call(
            deleteInterestRequest,
            action.payload.data,
            action.payload.token
        );
        action.payload.navigate(profileInterestsPath);
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

export default function* watchInterests() {
    yield takeLatest(getInterests, GetInterestsWorker);
    yield takeLatest(getInterest, GetInterestWorker);
    yield takeLatest(createInterest, CreateInterestWorker);
    yield takeLatest(updateInterest, UpdateInterestWorker);
    yield takeLatest(deleteInterest, DeleteInterestWorker);
}
