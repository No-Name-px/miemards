import { BankCard, BankCards, Token } from 'types';

const initialStateDecks: BankCards = {};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
    name: 'Decks',
    initialState: initialStateDecks,
    reducers: {
        setBankCards: (state, action: PayloadAction<BankCards>) => {
            return action.payload;
        },
        getBankCards: (state, action: PayloadAction<Token>) => state,
        createBankCard: (state, action: PayloadAction<BankCard & Token>) =>
            state,
        addBankCard: (
            state,
            action: PayloadAction<BankCard & { id: string }>
        ) => {
            state[action.payload.id] = {
                name: action.payload.name,
                description: action.payload.description,
            };
        },
        editBankCard: (
            state,
            action: PayloadAction<BankCard & Token & { id: string }>
        ) => state,
        deleteBankCard: (
            state,
            action: PayloadAction<{ id: string } & Token>
        ) => state,
        removeBankCard: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
            return state;
        },
    },
});

export const BankCardsReducer = decksSlice.reducer;
export const {
    setBankCards,
    getBankCards,
    createBankCard,
    addBankCard,
    editBankCard,
    deleteBankCard,
    removeBankCard,
} = decksSlice.actions;
