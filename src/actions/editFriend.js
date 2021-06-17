import { UserApi } from "../api/userApi";
const userApi = new UserApi('https://reqres.in/api');
export const editFriend = ({ first_name, email, id }) => {
  return async (dispatch) => {

    const [error, data] = await userApi.editFriend({ first_name, email, id });
    if (error) {
      dispatch({ type: "EDIT_FRIEND_ERROR" })
    } else {
      dispatch({ type: "EDIT_FRIEND_SUCCESS", friend: { ...data, id } })
    }
  }
}