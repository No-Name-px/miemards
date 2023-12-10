import { BASE_API_URL } from 'const';

export const createInterestFetchURL = `${BASE_API_URL}/interests`;
export const interestByIdFetchURL = `${BASE_API_URL}/interests/get_interest_by_id`;
export const updateInterestFetchURL = (id: string) =>
    `${BASE_API_URL}/interests/${id}`;
export const deleteInterestFetchURL = `${BASE_API_URL}/interests`;
export const interestByUserFetchURL = `${BASE_API_URL}/interests/show_interests_of_user`;
