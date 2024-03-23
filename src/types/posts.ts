export interface PostReq {
    text: string;
}

export interface Post {
    text: string;
    title: string;
}

export interface Posts {
    [id: string]: Post;
}

export interface PostsForm {
    text: string;
    title: string;
}
