import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editFriend } from '../../actions/editFriend';
export const EditPopup = ({ id, handleClose }) => {

  const { data: friends, isEditSuccess } = useSelector((state) => state.friends);
  const curFriend = friends.find((f) => f.id == id);
  const [editedFriendData, setEditedFriend] = useState({
    first_name: curFriend?.first_name,
    email: curFriend?.email
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEditSuccess) {
      setTimeout(() => {
        dispatch({ type: "REMOVE_SUCCESS" });
      }, 3000);
    }
  }, [isEditSuccess]);
  if (!curFriend) {
    return null;
  }

  const handleChange = (e) => {
    setEditedFriend(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleEdit = () => {
    dispatch(editFriend({ ...editedFriendData, id: id }));
  }
  return (<div className="edit-pop-up">
    <div className="edit-pop-up__top">
      <div>Редактировать:</div>
      {isEditSuccess && <div className="edit-pop-up__success">Вы успешно отредактировали пользователя</div>}
      <div className="edit-pop-up__close" onClick={() => handleClose()}>x</div>
    </div>
    <div className="edit-pop-up__input-wrapper">
      <input onChange={handleChange} name="first_name" value={editedFriendData.first_name || ''} type="text" />
    </div>
    <div className="edit-pop-up__input-wrapper">
      <input onChange={handleChange} name="email" value={editedFriendData.email || ''} type="text" />
    </div>
    <button onClick={() => handleEdit()} className="edit-pop-up__submit-btn">Редактировать</button>
  </div>);
}