import { handleActions } from 'redux-actions';
import { User } from '../../types';
import { UserActions } from '../actions';

const initialState = localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user') as string) as User)
    : null;

export const UserReducer = handleActions<User | null, User>(
    {
        [UserActions.Type.SET_USER]: (state, action) => action.payload,
    },
    initialState
);
