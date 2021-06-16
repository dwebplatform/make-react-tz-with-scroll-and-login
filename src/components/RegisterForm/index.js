import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/loginUser';
import loadingImg from '../../img/loading.gif'
export const RegisterForm = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    setUserData({
      name: '',
      email: ''
    })
  }
  const handleChange = (e) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }
  const { name, email } = userData;
  const { error, isLoggedIn, isLoading } = useSelector((state) => state.logins);
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }
  return (
    <form className="register" onSubmit={(e) => handleSubmit(e)} >
      {isLoggedIn && <div style={{ color: 'green' }}>Поздравляем вы зарегистрировались</div>}
      {error && <div style={{ color: 'red' }}>{error.msg}</div>}
      <div className="register__input-wrapper">
        <input placeholder="Введите имя:" name="name" type="text" value={name || ''} onChange={handleChange} />
      </div>
      <div className="register__input-wrapper">
        <input placeholder="Введите e-mail:" name="email" type="email" value={email || ''} onChange={handleChange} />
      </div>
      <button className="register__submit-btn" type="submit" disabled={isLoading}>{isLoading ?
        <img src={loadingImg} style={{ width: '10px', }} />
        : 'Зарегистрироваться'}</button>
      {isLoggedIn && <button className="register__logout-btn" onClick={(e) => { handleLogOut(e); }}>Выйти</button>}
    </form >
  );
}