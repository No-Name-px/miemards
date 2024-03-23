import { BASE_API_URL } from 'const';

export const createDeckURL = `${BASE_API_URL}/decks`;
export const decksFetchURL = `${BASE_API_URL}/decks/show_decks_of_user`;
export const generateCardForDeckFetchURL = (word: string, deckId: string) =>
    `${BASE_API_URL}/decks/generate_card?word=${word}&deck_id=${deckId}`;
export const deckByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/decks/get_deck_by_id/?deck_id=${id}`;
export const decksDeleteFetchURL = (id: string) =>
    `${BASE_API_URL}/decks/?deck_id=${id}`;
export const deckUpdateFetchURL = (id: string) =>
    `${BASE_API_URL}/decks/?deck_id=${id}`;
