import axios from 'axios';
import { ContentTypes } from '.';
import { decksFetchURL } from '../../constants';

export function decksRequest(data: string, token: string) {
    return axios({
        url: decksFetchURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${token}`,
        },
        data,
    });
}
