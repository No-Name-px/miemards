import { call, put, takeLatest } from 'redux-saga/effects';
import { apiLogin, apiRegister } from './api';
import { login, setToken } from './slice';

function* registerWorker(action) {
    const { email, country, name, number, password } = action.payload;
    try {
        const { message } = yield call(
            apiRegister({ email, country, name, number, password })
        );
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

function* loginWorker(action) {
    const { email, password } = action.password;
    try {
        const { token } = yield call(apiLogin({ email, password }));
        yield put(setToken(token));
    } catch (error) {
        console.log(error);
    }
}

export function* authWatcher() {
    yield takeLatest(login.TRIGGER, loginWorker);
    yield takeLatest(register.TRIGGER, registerWorker);
}
