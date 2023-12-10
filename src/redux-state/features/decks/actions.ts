import { createAction } from 'redux-actions';
import { DecksData } from 'types';

enum Type {
    SET_DECKS = 'SET_DECKS',
    GET_DECKS = 'GET_DECKS',
}

const setDecks = createAction<DecksData>(Type.SET_DECKS);
const getDecks = createAction<string>(Type.GET_DECKS);

export const DecksActions = {
    Type,
    setDecks,
    getDecks,
};

export type DecksActions = Omit<typeof DecksActions, 'Type'>;
