export interface Deck {
    creator: string;
    name: string;
    description: string;
}

export interface DecksData {
    [id: string]: Deck;
}

export interface GetDecks {
    id: string;
    token: string;
}
