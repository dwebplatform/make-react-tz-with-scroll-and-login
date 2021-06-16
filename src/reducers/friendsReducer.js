const initialState = {
  error: null,
  isLoading: false,
  data: []
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRIENDS_LOADING":
      return {
        ...state,
        isLoading: true
      }
    case "FRIENDS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: {
          msg: 'Не удалось загрузить список друзей'
        }
      };
    case "FRIENDS_SUCCESS":
      return {
        data: [...state.data, ...action.friends],
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};
