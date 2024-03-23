import { Token } from './auth';

export interface Card {
    deck_id: string;
    english_word: string;
    translation: string;
    explanation: string;
    id: string;
    image?: string | null;
}

export interface Cards {
    [id: string]: Card;
}

export interface GetCards extends Token {
    id: string;
}

export interface GetCard {
    id: string;
    token: string;
}

export interface CreateCard {
    english_word: string;
    translation: string;
    explanation: string;
    deck_id: string;
    image: string | null;
}

export interface CardFormValues {
    english_word: string;
    translation: string;
    explanation: string;
    image?: string | null;
}
