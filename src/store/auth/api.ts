import axios from 'axios';
import { loginUrl, registerUrl } from './constants';
import { Login, LoginResp, Register, RegisterResp } from './types';

export const apiLogin = (data: Login) =>
    axios.post<LoginResp>(loginUrl, { data });

export const apiRegister = (data: Register) =>
    axios.post<RegisterResp>(registerUrl, { data });
