import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from '../../actions/getFriends'
export const Friends = () => {
  const [curentPage, setCurPage] = useState(1);
  const dispatch = useDispatch();
  const { data: users, error, isLoading } = useSelector(state => state.friends);
  useEffect(() => {
    dispatch(getFriends(curentPage));
  }, [curentPage]);
  const handleScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setCurPage((prev) => {
        return prev + 1;
      });
    }
  }
  console.log(users)
  return (
    <div className="friends" onScroll={handleScroll}>
      {users.map((item, index) => {
        return (<div key={index} className="friends__item">
          <div className="friends__item-avatar-wrapper">
            <img src={item.avatar} />
          </div>
          <div className="friends__item-body">
            <div className="friends__item-name">{item.first_name}</div>
            <div className="friends__item-email">{item.email}</div>
          </div>
        </div>)
      })}
    </div>
  );
}