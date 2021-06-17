import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from '../../actions/getFriends'
import { deleteFriend } from '../../actions/deleteFriend';

import { AddFriend } from "../AddFriend";
import { EditPopup } from "../EditPopup";
export const Friends = () => {
  const [curentPage, setCurPage] = useState(1);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const { data: users, isTotal } = useSelector(state => state.friends);
  useEffect(() => {
    dispatch(getFriends(1));
  }, []);
  const handleScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight && !isTotal) {
      setCurPage((prev) => {
        return prev + 1;
      });
      dispatch(getFriends(curentPage + 1));
    }
  }
  const handleEdit = (id) => {
    setEditId(id);
  }
  const closePopup = () => {
    setEditId(null);
  }
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteFriend(id));
  }
  return (
    <div className="wrapper">
      {editId && <EditPopup id={editId} handleClose={closePopup} />}
      <div className="friends" onScroll={(e) => handleScroll(e)}>
        {users.length && users.map((item, index) => {
          return (<div key={index} className="friends__item">
            <div className="friends__item-avatar-wrapper">
              <img src={item.avatar} alt="person image" />
            </div>
            <div className="friends__item-body">
              <div className="friends__item-name"><div>{item.first_name} </div><button onClick={() => handleDelete(item.id)} className="friends__item-delete">x</button> </div>
              <div className="friends__item-email">{item.email}</div>
              <div className="friends__item-edit-btn-wrapper">
                <button onClick={(e) => { handleEdit(item.id); }}>Редактировать</button>
              </div>
            </div>
          </div>)
        })}
      </div>
      <AddFriend />
    </div>
  );
}