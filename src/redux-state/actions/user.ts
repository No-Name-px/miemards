import { createAction } from 'redux-actions';
import { Register, Token, User, withRedirect } from 'types';

enum Type {
    SET_USER = 'SET_USER',
    UPDATE = 'UPDATE_USER',
}

const setUser = createAction<User | null>(Type.SET_USER);
const updateUser = createAction<
    withRedirect<Register & { id: string }> & Token
>(Type.UPDATE);

export const UserActions = {
    Type,
    setUser,
    updateUser,
};

export type UserActions = Omit<typeof UserActions, 'Type'>;
