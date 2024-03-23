export interface Interest {
    name: string;
    description: string;
}

export interface Interests {
    [id: string]: Interest;
}

export interface InterestFormValues {
    name: string;
    description: string;
}
