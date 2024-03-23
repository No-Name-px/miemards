export const allDecksPath = '/decks';
export const deckCreatePath = '/decks/create';
export const deckPath = (id: string | number) => `/decks/${id}`;
export const deckEditPath = (id: string | number) => `/decks/${id}/edit`;
export const cardPath = (deckId: string | number, id: string) =>
    `/decks/${deckId}/cards/${id}`;
export const cardEdit = (deckId: string | number, id: string) =>
    `/decks/${deckId}/cards/${id}/edit`;

export const cardCreatePath = (id: string | number) =>
    `/decks/${id}/cards/create`;

export const authPath = '/auth';
export const registerPath = '/auth/register';
export const loginPath = '/auth/login';

export const profilePath = '/profile';
export const profilePathEdit = '/profile/edit';
export const profileInterestsPath = '/profile/interests';
export const profilePostsPath = '/profile/posts';
