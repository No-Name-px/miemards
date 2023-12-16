import { AuthActions, UserActions } from 'redux-state/actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { type Action } from 'redux-actions';
import { Register, Token, withRedirect } from 'types';
import { showToast } from 'utiles';
import { userDeleteRequest, userGetRequest, userUpdateRequest } from './api';
import { profilePath } from 'router/constants';

function* UpdateUserWorker(
    action: Action<withRedirect<Register & { id: string }> & Token>
) {
    try {
        yield call(
            userUpdateRequest,
            action.payload.data,
            action.payload.token
        );
        yield put(UserActions.setUser(action.payload.data));

        action.payload.navigate(profilePath);
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

function* GetUserWorker(action: Action<Token>) {
    try {
        const { data } = yield call(userGetRequest, action.payload.token);
        yield put(UserActions.setUser(data));
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

function* DeleteUserWorker(action: Action<withRedirect<Token>>) {
    try {
        yield call(userDeleteRequest, action.payload.data.token);
        yield put(AuthActions.logout({ navigate: action.payload.navigate }));
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

export default function* watchUser() {
    yield takeLatest(UserActions.Type.UPDATE, UpdateUserWorker);
    yield takeLatest(UserActions.Type.GET_USER, GetUserWorker);
    yield takeLatest(UserActions.Type.DELETE_USER, DeleteUserWorker);
}
