import { handleActions } from 'redux-actions';
import { AnalyticsActions } from 'redux-state/actions';
import { Analytics, AnalyticsItem } from 'types';

const initialState: Analytics | null = null;

export const AnalyticsReducer = handleActions<Analytics | null, AnalyticsItem>(
    {
        [AnalyticsActions.Type.SET_TODAY]: (state, action) => ({
            ...state,
            today: action.payload,
        }),
        [AnalyticsActions.Type.SET_WEEK]: (state, action) => ({
            ...state,
            week: action.payload,
        }),
        [AnalyticsActions.Type.SET_ALLTIME]: (state, action) => ({
            ...state,
            allTime: action.payload,
        }),
    },
    initialState
);
