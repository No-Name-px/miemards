export interface Deck {
    name: string;
    description: string;
    id: string;
}

export interface CreateDeck {
    name: string;
    description: string;
}

export interface AddDeck {
    name: string;
    description: string;
    id: string;
}

export interface GetDeck {
    id: string;
    token: string;
}

export interface DecksData {
    [id: string]: Deck;
}

export interface GetDecks {
    token: string;
}
