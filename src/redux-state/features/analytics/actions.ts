import { createAction } from 'redux-actions';
import {
    AnalyticsItem,
    GetAnalytics,
    SendAnalytics,
    Token,
    withRedirect,
} from 'types';

enum Type {
    SET_TODAY_ANALYTICS = 'SET_TODAY_ANALYTICS',
    SET_WEEK_ANALYTICS = 'SET_WEEK_ANALYTICS',
    SET_ALLTIME_ANALYTICS = 'SET_ALLTIME_ANALYTICS',
    GET_ANALYTICS = 'GET_ANALYTICS',
    SEND_ANALYTICS = 'SEND_ANALYTICS',
}

const setTodayAnalytics = createAction<AnalyticsItem>(Type.SET_TODAY_ANALYTICS);
const setWeekAnalytics = createAction<AnalyticsItem>(Type.SET_WEEK_ANALYTICS);
const setAllTimeAnalytics = createAction<AnalyticsItem>(
    Type.SET_ALLTIME_ANALYTICS
);
const getAnalytics = createAction<GetAnalytics>(Type.GET_ANALYTICS);
const sendAnalytics = createAction<withRedirect<SendAnalytics> & Token>(
    Type.SEND_ANALYTICS
);

export const AnalyticsActions = {
    Type,
    setTodayAnalytics,
    setWeekAnalytics,
    setAllTimeAnalytics,
    getAnalytics,
    sendAnalytics,
};

export type AnalyticsActions = Omit<typeof AnalyticsActions, 'Type'>;
