import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { friendsReducer } from '../reducers/friendsReducer';
const reducers = combineReducers({
  logins: loginReducer,
  friends: friendsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
