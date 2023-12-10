import { BASE_API_URL } from 'const';

export const createGroupFetchURL = `${BASE_API_URL}/groups`;
export const groupByIdFetchURL = `${BASE_API_URL}/groups/get_group_by_id`;
export const updateGroupFetchURL = (id: string) =>
    `${BASE_API_URL}/groups/${id}`;
export const deleteGroupFetchURL = `${BASE_API_URL}/groups`;
export const groupByUserFetchURL = `${BASE_API_URL}/groups/show_groups_of_user`;
