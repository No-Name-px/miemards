import {
    Card,
    CardFormValues,
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

const cardsSlice = createSlice({
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
            return action.payload;
        },
        loadCard: (state, action: PayloadAction<GetCard>) => state,
        getTranslation: (
            state,
            action: PayloadAction<{ card: CardFormValues } & Token>
        ) => state,
        setTranslation: (state, action: PayloadAction<CardFormValues>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        getImage: (
            state,
            action: PayloadAction<{ card: CardFormValues } & Token>
        ) => state,
        setImage: (state, action: PayloadAction<CardFormValues>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const CardsReducer = cardsSlice.reducer;
export const CardReducer = cardSlice.reducer;
export const {
    setCards,
    getCards,
    createCard,
    addCard,
    deleteCard,
    removeCard,
    editCard,
} = cardsSlice.actions;
export const {
    loadCard,
    setCard,
    getTranslation,
    setTranslation,
    getImage,
    setImage,
} = cardSlice.actions;
