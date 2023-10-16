export interface Card {
    wordEN: string;
    wordRU: string;
    description: string;
    img: string;
}

export interface Deck {
    name: string;
    wordsAll: number;
    wordsLearned: number;
    description: string;
    id: number;
    cards: Card[];
}
