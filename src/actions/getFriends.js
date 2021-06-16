export const getFriends = (page) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const { data } = await response.json()

      dispatch({
        type: "FRIENDS_SUCCESS",
        friends: data
      })
    } catch (e) {
      dispatch({ type: "FRIENDS_ERROR" })
    }

  }
}