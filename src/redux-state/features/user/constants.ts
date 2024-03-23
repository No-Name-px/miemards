import { BASE_API_URL } from 'const';

export const userPatchURL = `${BASE_API_URL}/profile`;
export const userGetURL = `${BASE_API_URL}/profile`;
export const userDeleteURL = `${BASE_API_URL}/profile`;
export const generateDeckURL = (word: string) =>
    `${BASE_API_URL}/profile/generate_deck?word=${word}`;
