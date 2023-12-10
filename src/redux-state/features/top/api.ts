import axios from 'axios';
import {
    rankingsAllTimeFetchURL,
    rankingsTodayFetchURL,
    rankingsWeekFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '../../api';

export function rankingsTodayRequest(token: string) {
    return axios({
        url: rankingsTodayFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function rankingsWeekRequest(token: string) {
    return axios({
        url: rankingsWeekFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function rankingsAllTimeRequest(token: string) {
    return axios({
        url: rankingsAllTimeFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
