import { BASE_API_URL } from 'const';

export const createPostFetchURL = `${BASE_API_URL}/post`;
export const postByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/post/get_post_by_id/?post_id=${id}`;
export const editPostFetchURL = (id: string) =>
    `${BASE_API_URL}/post/?post_id=${id}`;
export const deletePostFetchURL = (id: string) =>
    `${BASE_API_URL}/post/?post_id=${id}`;
export const postByUserFetchURL = `${BASE_API_URL}/post/show_posts_of_user`;
