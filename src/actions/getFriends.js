import { UserApi } from "../api/userApi";

const userApi = new UserApi('https://reqres.in/api');
export const getFriends = (page) => {
  return async (dispatch) => {
    dispatch({ type: "FRIENDS_LOADING" });
    const [error, { data }] = await userApi.getFriends(page);
    if (data.length == 0) {
      dispatch({ type: "FRIENDS_TOTAL" });
    } else if (error) {
      dispatch({ type: "FRIENDS_ERROR" })
    } else {
      dispatch({ type: "FRIENDS_SUCCESS", friends: data })
    }
  }
}