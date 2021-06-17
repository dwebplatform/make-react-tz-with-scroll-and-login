import { UserApi } from "../api/userApi";


const userApi = new UserApi('https://reqres.in/api');

export const addFriend = ({ name, job }) => {
  return async (dispatch) => {
    const [error, data] = await userApi.addFriend({ name, job });
    if (error) {
      dispatch({ type: "ADD_FRIEND_ERROR", msg: data.error || 'Не удалось добавить нового пользователя' });
    } else {
      dispatch({ type: "ADD_FRIEND_SUCCESS", friend: data });
    }
  }
}