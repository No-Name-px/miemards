export interface AuthStore {
    token: string | null;
}

export interface Login {
    email: string;
    password: string;
}

export interface LoginResp {
    access_token: string;
    token_type: string;
}

export interface Register {
    email: string;
    country: string;
    name: string;
    number: string;
    password: string;
}

export interface RegisterResp {
    message: string;
}
