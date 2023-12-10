import { all } from 'redux-saga/effects';
import authSaga from './features/auth/sagas';
import watchUser from './features/user/sagas';
import watchAnalytics from './features/analytics/sagas';
import watchTop from './features/top/sagas';

export default function* rootSaga() {
    yield all([authSaga(), watchUser(), watchAnalytics(), watchTop()]);
}
