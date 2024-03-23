import { call, put, takeLatest } from 'redux-saga/effects';
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    setPost,
    setPosts,
    updatePost,
} from './slice';
import { showToast } from 'utiles';
import { type Action } from 'redux-actions';
import { Post, PostReq, Token, withRedirect } from 'types';
import {
    createPostRequest,
    deletePostRequest,
    postByIdRequest,
    postsByUserRequest,
    updatePostRequest,
} from './api';
import { profilePostsPath } from 'router/constants';
import { postByIdFetchURL } from './constants';

function* GetPostsWorker(action: Action<Token>) {
    try {
        const { data } = yield call(postsByUserRequest, action.payload.token);
        yield put(setPosts(data));
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* GetPostWorker(action: Action<{ id: string } & Token>) {
    try {
        const { data } = yield call(
            postByIdRequest,
            action.payload.id,
            action.payload.token
        );
        yield put(
            setPost({
                title: data.text.split('===')[0],
                text: data.text.split('===')[1],
            })
        );
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* CreatePostWorker(action: Action<withRedirect<PostReq> & Token>) {
    try {
        const { data } = yield call(
            createPostRequest,
            {
                text: action.payload.data.text,
            },
            action.payload.token
        );
        action.payload.navigate(profilePostsPath);
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* UpdatePostWorker(
    action: Action<withRedirect<PostReq & { id: string }> & Token>
) {
    try {
        const { data } = yield call(
            updatePostRequest,
            action.payload.data.id,
            {
                text: action.payload.data.text,
            },
            action.payload.token
        );
        action.payload.navigate(profilePostsPath);
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

function* DeletePostWorker(action: Action<withRedirect<string> & Token>) {
    try {
        const { data } = yield call(
            deletePostRequest,
            action.payload.data,
            action.payload.token
        );
        action.payload.navigate(profilePostsPath);
    } catch (error: any) {
        console.log(error);
        const massageArray =
            typeof error?.response?.data?.detail !== 'string'
                ? error?.response?.data.detail?.map((det: any) => det.msg) || [
                      'Неизвестная ошибка',
                  ]
                : [error?.response?.data?.detail] || ['Неизвестная ошибка'];
        for (const msg of massageArray) {
            showToast(msg, 'error');
        }
    }
}

export default function* watchPosts() {
    yield takeLatest(getPosts, GetPostsWorker);
    yield takeLatest(getPost, GetPostWorker);
    yield takeLatest(createPost, CreatePostWorker);
    yield takeLatest(updatePost, UpdatePostWorker);
    yield takeLatest(deletePost, DeletePostWorker);
}
