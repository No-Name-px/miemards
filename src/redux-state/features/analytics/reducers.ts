import { handleActions } from 'redux-actions';
import { AnalyticsActions } from 'redux-state/actions';
import { Analytics, AnalyticsItem } from 'types';

const initialState: Analytics | null = null;

export const AnalyticsReducer = handleActions<Analytics | null, AnalyticsItem>(
    {
        [AnalyticsActions.Type.SET_TODAY_ANALYTICS]: (state, action) => ({
            ...state,
            today: action.payload,
        }),
        [AnalyticsActions.Type.SET_WEEK_ANALYTICS]: (state, action) => ({
            ...state,
            week: action.payload,
        }),
        [AnalyticsActions.Type.SET_ALLTIME_ANALYTICS]: (state, action) => ({
            ...state,
            allTime: action.payload,
        }),
        [AnalyticsActions.Type.GET_ANALYTICS]: (state, action) => {
            return state;
        },
    },
    initialState
);
