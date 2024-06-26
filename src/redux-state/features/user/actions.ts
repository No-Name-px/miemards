import { createAction } from 'redux-actions';
import { Register, Token, User, withRedirect } from 'types';

enum Type {
    SET_USER = 'SET_USER',
    UPDATE = 'UPDATE_USER',
    GET_USER = 'GET_USER',
    DELETE_USER = 'DELETE_USER',
    GENERATE_DECK = 'GENERATE_DECK',
}

const setUser = createAction<User | null>(Type.SET_USER);
const deleteUser = createAction<withRedirect<Token>>(Type.DELETE_USER);
const getUser = createAction<Token>(Type.GET_USER);
const updateUser = createAction<
    withRedirect<Register & { id: string }> & Token
>(Type.UPDATE);
const generateDeck = createAction<withRedirect<string> & Token>(
    Type.GENERATE_DECK
);

export const UserActions = {
    Type,
    setUser,
    updateUser,
    deleteUser,
    getUser,
    generateDeck,
};

export type UserActions = Omit<typeof UserActions, 'Type'>;
