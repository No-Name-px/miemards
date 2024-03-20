import {
    AddDeck,
    CreateDeck,
    Deck,
    DecksData,
    GetDeck,
    GetDecks,
    Token,
    withRedirect,
} from 'types';

const initialStateDecks: DecksData = {};

const initialStateActiveDeck: Deck = {
    name: '',
    description: '',
    id: '',
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
    name: 'Decks',
    initialState: initialStateDecks,
    reducers: {
        setDecks: (state, action: PayloadAction<DecksData>) => {
            return action.payload;
        },
        getDecks: (state, action: PayloadAction<GetDecks>) => state,
        createDeck: (
            state,
            action: PayloadAction<withRedirect<CreateDeck> & Token>
        ) => state,
        // getDeck: (state, action: PayloadAction<GetDeck>) => state,
        addDeck: (state, action: PayloadAction<AddDeck>) => {
            state[action.payload.id] = {
                name: action.payload.name,
                description: action.payload.description,
            };
        },
        editDeck: (
            state,
            action: PayloadAction<withRedirect<AddDeck> & Token>
        ) => state,
        deleteDeck: (
            state,
            action: PayloadAction<withRedirect<string> & Token>
        ) => state,
        removeDeck: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
            return state;
        },
    },
});

const deckSlice = createSlice({
    name: 'Deck',
    initialState: initialStateActiveDeck,
    reducers: {
        setDeck: (state, action: PayloadAction<Deck>) => {
            // console.log(action.payload);
            return action.payload;
        },
        loadDeck: (state, action: PayloadAction<GetDeck>) => state,
    },
});

export const DecksReducer = decksSlice.reducer;
export const DeckReducer = deckSlice.reducer;
export const {
    setDecks,
    getDecks,
    createDeck,
    addDeck,
    deleteDeck,
    removeDeck,
    editDeck,
} = decksSlice.actions;
export const { loadDeck, setDeck } = deckSlice.actions;
