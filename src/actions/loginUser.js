

import delay from 'delay';
import { UserApi } from "../api/userApi";

const userApi = new UserApi('https://reqres.in/api');

export const loginUser = ({ password, email }) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    await delay(3000);
    const [error, data] = await userApi.login({ password, email });
    if (error || data.error) {
      dispatch({ type: 'LOGIN_ERROR', msg: data.error || 'Ошибка сервера при регистрации' });
    } else {
      dispatch({ type: 'LOGIN_SUCCESS', token: data.token });
    }
  }
}