import { BASE_API_URL } from 'const';

export const decksFetchURL = `${BASE_API_URL}/decks/show_decks_of_user`;
export const generatCardForDeckFetchURL = `${BASE_API_URL}/decks/generate_card`;
export const deckByIdFetchURL = `${BASE_API_URL}/decks/get_deck_by_id`;
export const decksDeleteFetchURL = `${BASE_API_URL}/decks`;
export const deckUpdateFetchURL = (id: string) => `${BASE_API_URL}/decks/${id}`;
