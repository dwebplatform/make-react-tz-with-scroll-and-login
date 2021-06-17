
const checkLoggedIn = localStorage.getItem('token') ? true : false;
const initialState = {
  // TODO: make with storage
  error: null,
  isLoading: false,
  isLoggedIn: checkLoggedIn
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      }
    case "LOGOUT":
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        error: {
          msg: action.msg
        }
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem('token', action.token);
      return {
        isLoggedIn: true,
        isLoading: false,
        error: false
      };
    default:
      return state;
  }
};
