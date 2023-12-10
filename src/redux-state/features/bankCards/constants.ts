import { BASE_API_URL } from 'const';

export const createBankCardFetchURL = `${BASE_API_URL}/bank_cards`;
export const bankCardByIdFetchURL = `${BASE_API_URL}/bank_cards/get_bank_card_by_id`;
export const bankCardUpdateFetchURL = (id: string) =>
    `${BASE_API_URL}/bank_cards/${id}`;
export const deleteBankCardFetchURL = `${BASE_API_URL}/bank_cards`;
export const cardsByUserFetchURL = `${BASE_API_URL}/bank_cards/show_bank_cards_of_user`;
