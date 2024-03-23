import { Interest, Interests, Token, withRedirect } from 'types';

const initialStateInterests: Interests = {};

const initialStateActiveInterest: Interest = {
    name: '',
    description: '',
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const interestsSlice = createSlice({
    name: 'Interests',
    initialState: initialStateInterests,
    reducers: {
        setInterests: (state, action: PayloadAction<Interests>) => {
            return action.payload;
        },
        getInterests: (state, action: PayloadAction<Token>) => {},
    },
});

const interestSlice = createSlice({
    name: 'Interest',
    initialState: initialStateActiveInterest,
    reducers: {
        setInterest: (state, action: PayloadAction<Interest>) => {
            return action.payload;
        },
        getInterest: (
            state,
            action: PayloadAction<{ id: string } & Token>
        ) => {},
        createInterest: (
            state,
            action: PayloadAction<withRedirect<Interest> & Token>
        ) => {
            return state;
        },
        updateInterest: (
            state,
            action: PayloadAction<
                withRedirect<Interest & { id: string }> & Token
            >
        ) => {
            return state;
        },
        deleteInterest: (
            state,
            action: PayloadAction<withRedirect<string> & Token>
        ) => {
            return state;
        },
    },
});

export const InterestsReducer = interestsSlice.reducer;
export const InterestReducer = interestSlice.reducer;
export const { setInterests, getInterests } = interestsSlice.actions;
export const {
    setInterest,
    getInterest,
    createInterest,
    updateInterest,
    deleteInterest,
} = interestSlice.actions;
