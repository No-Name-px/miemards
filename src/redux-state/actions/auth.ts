import { createAction } from 'redux-actions';
import { Auth, Login, Register, withRedirect } from 'types';

enum Type {
    LOGIN = 'LOGIN',
    SET_AUTH = 'SET_AUTH',
    REGISTER = 'REGISTER',
}

const setAuthInfo = createAction<Auth>(Type.SET_AUTH);
const login = createAction<withRedirect<Login>>(Type.LOGIN);
const register = createAction<withRedirect<Register>>(Type.REGISTER);

export const AuthActions = {
    Type,
    setAuthInfo,
    login,
    register,
};

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
