import { type NavigateFunction } from 'react-router-dom';

export interface Login {
    email: string;
    password: string;
}

export interface withRedirect<T> {
    data: T;
    navigate: NavigateFunction;
}

export interface Token {
    token: string;
}

export interface Redirect {
    navigate: NavigateFunction;
}

export interface Register {
    email: string;
    password: string;
    username: string;
    country: string;
    phone: string;
}
