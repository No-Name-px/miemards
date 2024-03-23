import { all } from 'redux-saga/effects';
import authSaga from './features/auth/sagas';
import watchUser from './features/user/sagas';
import watchAnalytics from './features/analytics/sagas';
import watchTop from './features/top/sagas';
import watchDecks from './features/decks/sagas';
import watchCards from './features/cards/sagas';
import watchBankCards from './features/bankCards/sagas';
import watchInterests from './features/interests/saga';
import watchPosts from './features/posts/saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        watchUser(),
        watchAnalytics(),
        watchTop(),
        watchDecks(),
        watchCards(),
        watchBankCards(),
        watchInterests(),
        watchPosts(),
    ]);
}
