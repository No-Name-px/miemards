import { handleActions } from 'redux-actions';
import { User } from '../../../types';
import { UserActions } from '../../actions';

const initialState = null;

export const UserReducer = handleActions<User | null, User>(
    {
        [UserActions.Type.SET_USER]: (state, action) => action.payload,
        [UserActions.Type.GENERATE_DECK]: (state, action) => action.payload,
    },
    initialState
);
