import {
    Card,
    Cards,
    CreateCard,
    GetCard,
    GetCards,
    Token,
    withRedirect,
} from 'types';

const initialStateCards: Cards = {};

const initialStateActiveCard: Card = {
    deck_id: '',
    english_word: '',
    translation: '',
    explanation: '',
    id: '',
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
    name: 'Cards',
    initialState: initialStateCards,
    reducers: {
        setCards: (state, action: PayloadAction<Cards>) => {
            return action.payload;
        },
        getCards: (state, action: PayloadAction<GetCards>) => state,
        createCard: (
            state,
            action: PayloadAction<withRedirect<CreateCard> & Token>
        ) => state,
        addCard: (state, action: PayloadAction<Card>) => {
            state[action.payload.id] = action.payload;
        },
        editCard: (state, action: PayloadAction<withRedirect<Card> & Token>) =>
            state,
        deleteCard: (
            state,
            action: PayloadAction<
                | (withRedirect<{ deckId: string; id: string }> & Token)
                | ({ data: { deckId: string; id: string } } & Token)
            >
        ) => state,
        removeCard: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
            return state;
        },
    },
});

const cardSlice = createSlice({
    name: 'Card',
    initialState: initialStateActiveCard,
    reducers: {
        setCard: (state, action: PayloadAction<Card>) => {
            console.log(action.payload);
            return action.payload;
        },
        loadCard: (state, action: PayloadAction<GetCard>) => state,
    },
});

export const CardsReducer = decksSlice.reducer;
export const CardReducer = cardSlice.reducer;
export const {
    setCards,
    getCards,
    createCard,
    addCard,
    deleteCard,
    removeCard,
    editCard,
} = decksSlice.actions;
export const { loadCard, setCard } = cardSlice.actions;
