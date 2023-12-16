import { BASE_API_URL } from 'const';

export const createGroupFetchURL = `${BASE_API_URL}/groups`;
export const groupByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/groups/get_group_by_id/?group_id=${id}`;
export const updateGroupFetchURL = (id: string) =>
    `${BASE_API_URL}/groups/?group_id=${id}`;
export const deleteGroupFetchURL = (id: string) =>
    `${BASE_API_URL}/groups/?group_id=${id}`;
export const groupByUserFetchURL = `${BASE_API_URL}/groups/show_groups_of_user`;
