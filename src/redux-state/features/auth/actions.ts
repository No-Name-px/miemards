import { createAction } from 'redux-actions';
import { Login, Redirect, Register, withRedirect } from 'types';

enum Type {
    LOGIN = 'LOGIN',
    SET_AUTH = 'SET_AUTH',
    REGISTER = 'REGISTER',
    LOGOUT = 'LOGOUT',
}

const setAuthInfo = createAction<string | null>(Type.SET_AUTH);
const login = createAction<withRedirect<Login>>(Type.LOGIN);
const register = createAction<withRedirect<Register>>(Type.REGISTER);
const logout = createAction<Redirect>(Type.LOGOUT);

export const AuthActions = {
    Type,
    setAuthInfo,
    login,
    register,
    logout,
};

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
