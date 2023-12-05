import { createAction } from 'redux-actions';
import { AnalyticsItem, GetAnalytics } from 'types';

enum Type {
    SET_TODAY = 'SET_TODAY',
    SET_WEEK = 'SET_WEEK',
    SET_ALLTIME = 'SET_ALLTIME',
    GET_ANALYTICS = 'GET_ANALYTICS',
}

const setTodayAnalytics = createAction<AnalyticsItem>(Type.SET_TODAY);
const setWeekAnalytics = createAction<AnalyticsItem>(Type.SET_WEEK);
const setAllTimeAnalytics = createAction<AnalyticsItem>(Type.SET_ALLTIME);
const getAnalytics = createAction<GetAnalytics>(Type.GET_ANALYTICS);

export const AnalyticsActions = {
    Type,
    setTodayAnalytics,
    setWeekAnalytics,
    setAllTimeAnalytics,
    getAnalytics,
};

export type AnalyticsActions = Omit<typeof AnalyticsActions, 'Type'>;
