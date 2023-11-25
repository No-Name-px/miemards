import { put, call, takeLatest } from 'redux-saga/effects';
import { AuthActions, UserActions } from '../actions';
import { type Action } from 'redux-actions';
import { Login, Auth, Register, User, withRedirect } from 'types';
import { loginRequest, registerRequest } from './api';
import { showToast } from 'utiles';

function* LoginWorker(action: Action<withRedirect<Login>>) {
    try {
        const { data } = yield call(loginRequest, action.payload.data);

        yield put(AuthActions.setAuthInfo(data.access_token as Auth));

        showToast(
            `Вы успешно вошли, ваш токен: ${data.access_token}`,
            'success'
        );

        yield put(
            UserActions.setUser({
                id: data.user_id,
                username: data.username,
                email: data.email,
                phone: data.phone,
                country: data.country,
            } as User)
        );

        action.payload.navigate('/profile');
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

function* RegisterWorker(action: Action<withRedirect<Register>>) {
    try {
        const { data } = yield call(registerRequest, action.payload.data);
        console.log(data);

        showToast(data.message, 'success');

        action.payload.navigate('/auth/login');
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
    yield takeLatest(AuthActions.Type.LOGIN, LoginWorker);
    yield takeLatest(AuthActions.Type.REGISTER, RegisterWorker);
}
