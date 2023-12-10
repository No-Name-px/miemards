import { createAction } from 'redux-actions';
import { GetTops, TopItem } from 'types/top';

enum Type {
    SET_TODAY_TOP = 'SET_TODAY_TOP',
    SET_WEEK_TOP = 'SET_WEEK_TOP',
    SET_ALLTIME_TOP = 'SET_ALLTIME_TOP',
    GET_TOP = 'GET_TOP',
}

const setTodayTop = createAction<TopItem[]>(Type.SET_TODAY_TOP);
const setWeekTop = createAction<TopItem[]>(Type.SET_WEEK_TOP);
const setAllTimeTop = createAction<TopItem[]>(Type.SET_ALLTIME_TOP);
const getTop = createAction<GetTops>(Type.GET_TOP);

export const TopActions = {
    Type,
    setTodayTop,
    setWeekTop,
    setAllTimeTop,
    getTop,
};

export type TopActions = Omit<typeof TopActions, 'Type'>;
