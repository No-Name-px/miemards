import { handleActions } from 'redux-actions';
import { AuthActions } from '../../actions';

const initialState = localStorage.getItem('token') ?? null;

export const AuthReducer = handleActions<string | null, string>(
    {
        [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
    },
    initialState
);
