import { createAction } from 'redux-actions';
import { User } from '../../types';

enum Type {
    SET_USER = 'SET_USER',
}

const setUser = createAction<User>(Type.SET_USER);

export const UserActions = {
    Type,
    setUser,
};

export type UserActions = Omit<typeof UserActions, 'Type'>;
