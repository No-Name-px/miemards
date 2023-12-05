import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AnalyticsActions } from 'redux-state/actions';
import { AnalyticsItem, AnalyticsResp, GetAnalytics } from 'types';
import {
    analyticsAllTimeRequest,
    analyticsTodayRequest,
    analyticsWeekRequest,
} from './api';
import { showToast } from 'utiles';

function* AnalyticsGetWorker(action: Action<GetAnalytics>) {
    try {
        let data: AnalyticsResp;
        let parsedData: AnalyticsItem;
        switch (action.payload.period) {
            case 'today':
                ({ data } = yield call(
                    analyticsTodayRequest,
                    action.payload.token
                ));
                parsedData = {
                    totalWords: data.total_words,
                    ranking: data.ranking,
                    fullyLearnedDecks: data.fully_learned_decks,
                    partlyLearnedDecks: data.partly_learned_decks,
                    games: data.games,
                };
                yield put(AnalyticsActions.setTodayAnalytics(parsedData));
                break;
            case 'week':
                ({ data } = yield call(
                    analyticsWeekRequest,
                    action.payload.token
                ));
                parsedData = {
                    totalWords: data.total_words,
                    ranking: data.ranking,
                    fullyLearnedDecks: data.fully_learned_decks,
                    partlyLearnedDecks: data.partly_learned_decks,
                    games: data.games,
                };
                yield put(AnalyticsActions.setWeekAnalytics(parsedData));
                break;
            case 'allTime':
                ({ data } = yield call(
                    analyticsAllTimeRequest,
                    action.payload.token
                ));
                parsedData = {
                    totalWords: data.total_words,
                    ranking: data.ranking,
                    fullyLearnedDecks: data.fully_learned_decks,
                    partlyLearnedDecks: data.partly_learned_decks,
                    games: data.games,
                };
                yield put(AnalyticsActions.setAllTimeAnalytics(parsedData));
                break;
            default:
                throw 'Unexpected period';
        }
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

export default function* watchAnalytics() {
    yield takeLatest(AnalyticsActions.Type.GET_ANALYTICS, AnalyticsGetWorker);
}
