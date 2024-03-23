import {
    Analytics,
    DecksData,
    User,
    Top,
    Deck,
    Cards,
    BankCards,
    Card,
    Interest,
    Interests,
    Posts,
    Post,
} from 'types';
import { AuthReducer } from './features/auth/reducers';
import { UserReducer } from './features/user/reducers';
import { DecksReducer, DeckReducer } from './features/decks/slice';
import { CardReducer, CardsReducer } from './features/cards/slice';
import { combineReducers } from 'redux';
import { AnalyticsReducer } from './features/analytics/reducers';
import { TopReducer } from './features/top/reducers';
import { BankCardsReducer } from './features/bankCards/slice';
import { InterestReducer, InterestsReducer } from './actions';
import { PostReducer, PostsReducer } from './features/posts/slice';

export interface RootReducer {
    user: User | null;
    auth: string | null;
    decks: DecksData | null;
    deck: Deck | null;
    cards: Cards;
    card: Card;
    analytics: Analytics | null;
    top: Top | null;
    bankCards: BankCards;
    interests: Interests;
    interest: Interest;
    posts: Posts;
    post: Post;
}

const rootReducer = combineReducers<RootReducer>({
    user: UserReducer as any,
    auth: AuthReducer as any,
    decks: DecksReducer as any,
    deck: DeckReducer as any,
    cards: CardsReducer as any,
    card: CardReducer as any,
    analytics: AnalyticsReducer as any,
    top: TopReducer as any,
    bankCards: BankCardsReducer as any,
    interests: InterestsReducer as any,
    interest: InterestReducer as any,
    posts: PostsReducer as any,
    post: PostReducer as any,
});

export default rootReducer;
