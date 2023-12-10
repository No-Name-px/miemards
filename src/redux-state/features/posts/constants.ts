import { BASE_API_URL } from 'const';

export const createPostFetchURL = `${BASE_API_URL}/post`;
export const postByIdFetchURL = `${BASE_API_URL}/post/get_post_by_id`;
export const editPostFetchURL = (id: string) => `${BASE_API_URL}/post/${id}`;
export const deletePostFetchURL = `${BASE_API_URL}/post`;
export const postByUserFetchURL = `${BASE_API_URL}/post/show_posts_of_user`;
