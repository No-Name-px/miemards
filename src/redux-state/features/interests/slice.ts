import { Interest } from 'types';

const initialStateCards: Interest[] = [];

const initialStateActiveCard: Interest = {
    name: '',
    description: '',
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
    name: 'Interests',
    initialState: initialStateCards,
    reducers: {
        setInterest: (state, action: PayloadAction<Interest[]>) => {
            return action.payload;
        },
        get,
    },
});

const cardSlice = createSlice({
    name: 'Interest',
    initialState: initialStateActiveCard,
    reducers: {
        setCard: (state, action: PayloadAction<Interest>) => {
            return action.payload;
        },
    },
});

export const CardsReducer = decksSlice.reducer;
export const CardReducer = cardSlice.reducer;
export const {} = decksSlice.actions;
export const {} = cardSlice.actions;
