import { type Action } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TopActions } from 'redux-state/actions';
import {
    rankingsAllTimeRequest,
    rankingsTodayRequest,
    rankingsWeekRequest,
} from '../../api';
import { showToast } from 'utiles';
import { GetTops, TopItem } from 'types/top';

function* TopGetWorker(action: Action<GetTops>) {
    try {
        let data: TopItem[];
        switch (action.payload.period) {
            case 'today':
                ({ data } = yield call(
                    rankingsTodayRequest,
                    action.payload.token
                ));
                yield put(TopActions.setTodayTop(data));
                break;
            case 'week':
                ({ data } = yield call(
                    rankingsWeekRequest,
                    action.payload.token
                ));
                yield put(TopActions.setWeekTop(data));
                break;
            case 'allTime':
                ({ data } = yield call(
                    rankingsAllTimeRequest,
                    action.payload.token
                ));
                yield put(TopActions.setAllTimeTop(data));
                break;
            default:
                throw 'Unexpected period';
        }
    } catch (error: any) {
        console.log(error);
        showToast(error.toString(), 'error');
    }
}

export default function* watchTop() {
    yield takeLatest(TopActions.Type.GET_TOP, TopGetWorker);
}
