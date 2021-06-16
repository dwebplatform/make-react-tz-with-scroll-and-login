
const checkLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;
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
      return {
        ...state,
        isLoggedIn: false
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        error: {
          msg: 'Не верны введены данные'
        }
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem('isLoggedIn', 'true');
      return {
        isLoggedIn: true,
        isLoading: false,
        error: false
      };
    default:
      return state;
  }
};
