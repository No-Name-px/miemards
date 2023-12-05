import { all } from 'redux-saga/effects';
import authSaga from './auth';
import watchUser from './user';
import watchAnalytics from './analytics';

export default function* rootSaga() {
    yield all([authSaga(), watchUser(), watchAnalytics()]);
}
