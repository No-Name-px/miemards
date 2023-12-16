import { Token } from './auth';

export interface Card {
    deck_id: string;
    english_word: string;
    translation: string;
    explanation: string;
    id: string;
}

export interface Cards {
    [id: string]: Card;
}

export interface GetCards extends Token {
    id: string;
}

export interface CreateCard {
    english_word: string;
    translation: string;
    explanation: string;
    deck_id: string;
}
