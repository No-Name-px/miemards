import { BASE_API_URL } from 'const';

export const createBankCardFetchURL = `${BASE_API_URL}/bank_cards`;
export const bankCardByIdFetchURL = (id: string) =>
    `${BASE_API_URL}/bank_cards/get_bank_card_by_id/?bank_card_id=${id}}`;
export const bankCardUpdateFetchURL = (id: string) =>
    `${BASE_API_URL}/bank_cards/?bank_card_id=${id}`;
export const deleteBankCardFetchURL = (id: string) =>
    `${BASE_API_URL}/bank_cards/?bank_card_id=${id}`;
export const cardsByUserFetchURL = `${BASE_API_URL}/bank_cards/show_bank_cards_of_user`;
