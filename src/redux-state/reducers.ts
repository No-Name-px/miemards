import { Analytics, DecksData, User, Top, Deck, Cards, BankCards } from 'types';
import { AuthReducer } from './features/auth/reducers';
import { UserReducer } from './features/user/reducers';
import { DecksReducer, DeckReducer } from './features/decks/slice';
import { CardsReducer } from './features/cards/slice';
import { combineReducers } from 'redux';
import { AnalyticsReducer } from './features/analytics/reducers';
import { TopReducer } from './features/top/reducers';
import { BankCardsReducer } from './features/bankCards/slice';

export interface RootReducer {
    user: User | null;
    auth: string | null;
    decks: DecksData | null;
    deck: Deck | null;
    cards: Cards;
    analytics: Analytics | null;
    top: Top | null;
    bankCards: BankCards;
}

const rootReducer = combineReducers<RootReducer>({
    user: UserReducer as any,
    auth: AuthReducer as any,
    decks: DecksReducer as any,
    deck: DeckReducer as any,
    cards: CardsReducer as any,
    analytics: AnalyticsReducer as any,
    top: TopReducer as any,
    bankCards: BankCardsReducer as any,
});

export default rootReducer;
