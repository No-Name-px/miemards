import { handleActions } from 'redux-actions';
import { TopActions } from 'redux-state/actions';
import { TopItem, Top } from 'types/top';

const initialState: Top | null = null;

export const TopReducer = handleActions<Top | null, TopItem[]>(
    {
        [TopActions.Type.SET_TODAY_TOP]: (state, action) => ({
            ...state,
            today: action.payload,
        }),
        [TopActions.Type.SET_WEEK_TOP]: (state, action) => ({
            ...state,
            week: action.payload,
        }),
        [TopActions.Type.SET_ALLTIME_TOP]: (state, action) => ({
            ...state,
            allTime: action.payload,
        }),
    },
    initialState
);
