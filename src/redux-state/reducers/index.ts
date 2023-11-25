import { Auth, DecksData, User } from 'types';
import { AuthReducer } from './auth';
import { UserReducer } from './user';
import { DecksReducer } from './decks';
import { combineReducers } from 'redux';

export interface RootReducer {
    user: User;
    auth: Auth;
    decks: DecksData;
}

const rootReducer = combineReducers<RootReducer>({
    user: UserReducer as any,
    auth: AuthReducer as any,
    decks: DecksReducer as any,
});

export default rootReducer;
