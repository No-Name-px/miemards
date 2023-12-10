import { BASE_API_URL } from 'const';

export const createSocialAccountFetchURL = `${BASE_API_URL}/social_accounts`;
export const socialAccountByIdFetchURL = `${BASE_API_URL}/social_accounts/get_account_by_id`;
export const socialAccountUpdateFetchURL = (id: string) =>
    `${BASE_API_URL}/social_accounts/${id}`;
export const socialAccountDeleteFetchURL = (id: string) =>
    `${BASE_API_URL}/social_accounts/${id}`;
export const socialAccountByUserFetchURL = `${BASE_API_URL}/social_accounts/show_accounts_of_user`;
