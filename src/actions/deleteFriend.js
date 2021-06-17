import { UserApi } from "../api/userApi";
const userApi = new UserApi('https://reqres.in/api');
export const deleteFriend = (id) => {
  return async (dispatch) => {
    const [error, data] = await userApi.deleteFriend(id);
    if (data.status == 204) {
      dispatch({ type: "DELETE_FRIEND_SUCCESS", id });
    } else {
      dispatch({ type: "DELETE_FRIEND_ERROR" })
    }
    // if (error) {
    //   dispatch({ type: "DELETE_FRIEND_ERROR" });
    // } else {
    // }
  }
}