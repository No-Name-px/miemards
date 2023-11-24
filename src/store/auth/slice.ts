import {
    type CaseReducer,
    type PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { AuthStore } from './types';

const initialState: AuthStore = {
    token: null,
};

const setTokenReducer: CaseReducer<AuthStore, PayloadAction<string>> = (
    state,
    action
) => {
    state.token = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {},
        setToken: setTokenReducer,
    },
});

export const { login, setToken } = authSlice.actions;

export default authSlice.actions;
