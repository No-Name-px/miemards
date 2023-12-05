import axios from 'axios';
import {
    analyticsAllTimeFetchURL,
    analyticsTodayFetchURL,
    analyticsWeekFetchURL,
} from 'redux-state/constants';
import { ContentTypes } from '.';

export function analyticsTodayRequest(token: string) {
    return axios({
        url: analyticsTodayFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function analyticsWeekRequest(token: string) {
    return axios({
        url: analyticsWeekFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function analyticsAllTimeRequest(token: string) {
    return axios({
        url: analyticsAllTimeFetchURL,
        method: 'GET',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
    });
}
