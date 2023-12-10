import { put, call, takeLatest } from 'redux-saga/effects';
import { AuthActions, UserActions } from '../../actions';
import { type Action } from 'redux-actions';
import { Login, Redirect, Register, User, withRedirect } from 'types';
import { loginRequest, registerRequest } from './api';
import { showToast } from 'utiles';
import { authPath, profilePath } from 'router/constants';

function* LoginWorker(action: Action<withRedirect<Login>>) {
    try {
        const { data } = yield call(loginRequest, action.payload.data);

        yield put(AuthActions.setAuthInfo(data.access_token));
        localStorage.setItem('token', data.access_token);

        showToast(`Вы успешно вошли`, 'success');

        const userData: User = {
            id: data.user_id,
            username: data.username,
            email: data.email,
            phone: data.phone,
            country: data.country,
        };

        yield put(UserActions.setUser(userData));
        localStorage.setItem('user', JSON.stringify(userData));

        action.payload.navigate(profilePath);
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

function* RegisterWorker(action: Action<withRedirect<Register>>) {
    try {
        const { data } = yield call(registerRequest, action.payload.data);

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

function* LogoutWorker(action: Action<Redirect>) {
    try {
        yield put(AuthActions.setAuthInfo(null));
        localStorage.removeItem('token');

        yield put(UserActions.setUser(null));
        localStorage.removeItem('user');

        action.payload.navigate(authPath);
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

export default function* watchAuth() {
    yield takeLatest(AuthActions.Type.LOGIN, LoginWorker);
    yield takeLatest(AuthActions.Type.REGISTER, RegisterWorker);
    yield takeLatest(AuthActions.Type.LOGOUT, LogoutWorker);
}
