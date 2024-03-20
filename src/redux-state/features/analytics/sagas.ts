import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AnalyticsActions } from 'redux-state/actions';
import {
    AnalyticsItem,
    AnalyticsResp,
    GetAnalytics,
    SendAnalytics,
    Token,
    withRedirect,
} from 'types';
import {
    analyticsAllTimeRequest,
    analyticsSend,
    analyticsTodayRequest,
    analyticsWeekRequest,
} from '../../api';
import { showToast } from 'utiles';
import { allDecksPath } from 'router/constants';

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

function* SendAnalyticsWorker(
    action: Action<withRedirect<SendAnalytics> & Token>
) {
    try {
        const { data } = yield call(
            analyticsSend,
            action.payload.data,
            action.payload.token
        );
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data?.detail?.map((det: any) => det.msg)
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

export default function* watchAnalytics() {
    yield takeLatest(AnalyticsActions.Type.GET_ANALYTICS, AnalyticsGetWorker);
    yield takeLatest(AnalyticsActions.Type.SEND_ANALYTICS, SendAnalyticsWorker);
}
