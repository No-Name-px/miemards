import { UserActions } from 'redux-state/actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { type Action } from 'redux-actions';
import { Register, Token, withRedirect } from 'types';
import { showToast } from 'utiles';
import { userUpdateRequest } from './api/user';
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

export default function* watchUser() {
    yield takeLatest(UserActions.Type.UPDATE, UpdateUserWorker);
}
