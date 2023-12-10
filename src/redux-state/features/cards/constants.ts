import { BASE_API_URL } from 'const';

export const createCardFetchURL = `${BASE_API_URL}/cards`;
export const cardByIdFetchURL = `${BASE_API_URL}/cards/get_card_by_id`;
export const cardUpdateFetchURL = (id: string) => `${BASE_API_URL}/cards/${id}`;
export const deleteCardFetchURL = `${BASE_API_URL}/cards`;
export const cardsFromDeckFetchURL = `${BASE_API_URL}/cards/show_cards_from_deck`;
export const generateCardImageFetchURL = `${BASE_API_URL}/cards/generate_image`;
export const generateCardTranslateFetchURL = `${BASE_API_URL}/cards/generate_translation`;
