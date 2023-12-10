import { Analytics, DecksData, User, Top } from 'types';
import { AuthReducer } from './features/auth/reducers';
import { UserReducer } from './features/user/reducers';
import { DecksReducer } from './features/decks/reducers';
import { combineReducers } from 'redux';
import { AnalyticsReducer } from './features/analytics/reducers';
import { TopReducer } from './features/top/reducers';

export interface RootReducer {
    user: User | null;
    auth: string | null;
    decks: DecksData | null;
    analytics: Analytics | null;
    top: Top | null;
}

const rootReducer = combineReducers<RootReducer>({
    user: UserReducer as any,
    auth: AuthReducer as any,
    decks: DecksReducer as any,
    analytics: AnalyticsReducer as any,
    top: TopReducer as any,
});

export default rootReducer;
