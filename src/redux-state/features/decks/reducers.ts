import { handleActions } from 'redux-actions';
import { Deck, DecksData } from 'types';
import { DecksActions } from '../../actions';

const initialState: DecksData = {};

export const DecksReducer = handleActions<DecksData | null, DecksData>(
    {
        [DecksActions.Type.SET_DECKS]: (state, action) => action.payload,
    },
    initialState
);
