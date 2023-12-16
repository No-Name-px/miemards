import { Card, Cards, CreateCard, GetCards, Token, withRedirect } from 'types';

const initialStateCards: Cards = {};

// const initialStateActiveCard: Card = {
//     deckId: '',
//     englishWord: '',
//     translation: '',
//     explanation: '',
//     id: '',
// };

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
        // editDeck: (
        //     state,
        //     action: PayloadAction<withRedirect<AddDeck> & Token>
        // ) => state,
        // deleteDeck: (
        //     state,
        //     action: PayloadAction<withRedirect<string> & Token>
        // ) => state,
        // removeDeck: (state, action: PayloadAction<string>) => {
        //     delete state[action.payload];
        //     return state;
        // },
    },
});

// const deckSlice = createSlice({
//     name: 'Deck',
//     initialState: initialStateActiveCard,
//     reducers: {
//         setDeck: (state, action: PayloadAction<Deck>) => {
//             console.log(action.payload);
//             return action.payload;
//         },
//         loadDeck: (state, action: PayloadAction<GetDeck>) => state,
//     },
// });

export const CardsReducer = decksSlice.reducer;
// export const DeckReducer = deckSlice.reducer;
export const { setCards, getCards, createCard, addCard } = decksSlice.actions;
// export const { loadDeck, setDeck } = deckSlice.actions;
