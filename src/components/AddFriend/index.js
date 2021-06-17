import { useState } from "react"
import { useDispatch } from "react-redux";
import { addFriend } from "../../actions/addFriend";

export const AddFriend = () => {
  const [addedFriendData, setAddedFriendData] = useState({
    name: '',
    job: ''
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAddedFriendData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    });
  }
  const handleAddFriend = () => {
    dispatch(addFriend(addedFriendData));
  }
  return <div className="add-friend">
    <div className="add-friend__input-wrapper">
      <input value={addedFriendData.name || ''} placeholder="name" onChange={(e) => handleChange(e)} name="name" />
    </div>
    <div className="add-friend__input-wrapper">
      <input value={addedFriendData.job || ''} placeholder="job" onChange={(e) => handleChange(e)} name="job" />
    </div>
    <button className="add-friend__submit-btn"
      onClick={(e) => handleAddFriend(e)}>Добавить</button>
  </div>
}