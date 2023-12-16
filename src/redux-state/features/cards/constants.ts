import { BASE_API_URL } from 'const';

export const createCardFetchURL = `${BASE_API_URL}/cards`;
export const cardByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/cards/get_card_by_id/?card_id=${id}`;
export const cardUpdateFetchURL = (id: string) =>
    `${BASE_API_URL}/cards/?card_id=${id}`;
export const deleteCardFetchURL = (id: string) =>
    `${BASE_API_URL}/cards?card_id=${id}`;
export const cardsFromDeckFetchURL = (id: string) =>
    `${BASE_API_URL}/cards/show_cards_from_deck/?deck_id=${id}`;
export const generateCardImageFetchURL = (id: string) =>
    `${BASE_API_URL}/cards/generate_image/?card_id=${id}`;
export const generateCardTranslateFetchURL = (id: string) =>
    `${BASE_API_URL}/cards/generate_translation/?card_id=${id}`;
