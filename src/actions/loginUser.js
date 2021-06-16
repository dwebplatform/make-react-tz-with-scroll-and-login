import delay from 'delay';
export const loginUser = ({ name, email }) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    await delay(3000);
    if (name === 'test' && email == 'test@mail.ru') {
      dispatch({ type: 'LOGIN_SUCCESS', name });
    } else {
      dispatch({ type: 'LOGIN_ERROR', name, email });
    }
  }
}