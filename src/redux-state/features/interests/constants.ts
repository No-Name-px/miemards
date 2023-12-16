import { BASE_API_URL } from 'const';

export const createInterestFetchURL = `${BASE_API_URL}/interests`;
export const interestByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/interests/get_interest_by_id/?interest_id=${id}`;
export const updateInterestFetchURL = (id: string) =>
    `${BASE_API_URL}/interests/?interest_id=${id}`;
export const deleteInterestFetchURL = (id: string) =>
    `${BASE_API_URL}/interests/?interest_id=${id}`;
export const interestByUserFetchURL = `${BASE_API_URL}/interests/show_interests_of_user`;
