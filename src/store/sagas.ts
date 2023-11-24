import { all } from 'redux-saga/effects';
import { authWatcher } from './auth/saga';

export default function* rootSaga() {
    yield all([authWatcher()]);
}
