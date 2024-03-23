import { Post, PostReq, Posts, Token, withRedirect } from 'types';

const initialStatePosts: Posts = {};

const initialStateActivePost: Post = {
    title: '',
    text: '',
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'Posts',
    initialState: initialStatePosts,
    reducers: {
        setPosts: (state, action: PayloadAction<Posts>) => {
            return action.payload;
        },
        getPosts: (state, action: PayloadAction<Token>) => {},
    },
});

const postSlice = createSlice({
    name: 'Post',
    initialState: initialStateActivePost,
    reducers: {
        setPost: (state, action: PayloadAction<Post>) => {
            return action.payload;
        },
        getPost: (state, action: PayloadAction<{ id: string } & Token>) => {},
        createPost: (
            state,
            action: PayloadAction<withRedirect<PostReq> & Token>
        ) => {
            return state;
        },
        updatePost: (
            state,
            action: PayloadAction<
                withRedirect<PostReq & { id: string }> & Token
            >
        ) => {
            return state;
        },
        deletePost: (
            state,
            action: PayloadAction<withRedirect<string> & Token>
        ) => {
            return state;
        },
    },
});

export const PostsReducer = postsSlice.reducer;
export const PostReducer = postSlice.reducer;
export const { setPosts, getPosts } = postsSlice.actions;
export const { setPost, getPost, createPost, updatePost, deletePost } =
    postSlice.actions;
