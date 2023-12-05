import { Analytics, DecksData, User } from 'types';
import { AuthReducer } from './auth';
import { UserReducer } from './user';
import { DecksReducer } from './decks';
import { combineReducers } from 'redux';
import { AnalyticsReducer } from './analytics';

export interface RootReducer {
    user: User | null;
    auth: string | null;
    decks: DecksData | null;
    analytics: Analytics | null;
}

const rootReducer = combineReducers<RootReducer>({
    user: UserReducer as any,
    auth: AuthReducer as any,
    decks: DecksReducer as any,
    analytics: AnalyticsReducer as any,
});

export default rootReducer;
