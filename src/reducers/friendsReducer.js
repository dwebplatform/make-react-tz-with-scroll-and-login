const initialState = {
  error: null,
  isLoading: false,
  isTotal: false,
  data: [],
  isEditSuccess: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "DELETE_FRIEND_ERROR":
      return {
        ...state,
        error: {
          msg: action.msg
        },
      }
    case "DELETE_FRIEND_SUCCESS":
      return {
        ...state,
        data: state.data.filter(el => el.id !== action.id)
      }
    case "REMOVE_SUCCESS":
      return {
        ...state,
        isEditSuccess: false
      }
    case "EDIT_FRIEND_SUCCESS":
      const copy = state.data;
      let curFriend = copy.find(f => f.id === action.friend.id);
      curFriend.first_name = action.friend.name;
      curFriend.email = action.friend.job;
      return {
        ...state,
        data: copy,
        isEditSuccess: true
      }
    case "EDIT_FRIEND_ERROR":
      return {
        ...state,
        error: {
          msg: 'Не удалось отредактировать пользователя'
        }
      }
    case "DELETE_FRIEND_SUCCESS":
      return {
        ...state
      }
    case "DELETE_FRIEND_ERROR":
      return {
        ...state
      }
    case "ADD_FRIEND_ERROR":
      return {
        error: {
          msg: 'Не удалось добавить нового пользователя'
        },
        ...state,
      }
    case "ADD_FRIEND_SUCCESS":
      const newFriend = action.friend;
      return {
        ...state,
        data: [...state.data, {
          first_name: newFriend.name,
          email: `${newFriend.job}@mail.ru`,
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_cMFzqrc7nHjg4nCxSBJJTf-W-YN1qJC9Q&usqp=CAU'
        }]
      }
    case "FRIENDS_TOTAL":
      return {
        ...state,
        isTotal: true
      };
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
