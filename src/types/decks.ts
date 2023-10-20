export interface Card {
    wordEN: string | null;
    wordRU: string;
    description: string;
    img?: string | null;
}

export interface Deck {
    name: string;
    wordsAll: number;
    wordsLearned: number;
    description: string;
    id: number;
    cards: Card[];
}
