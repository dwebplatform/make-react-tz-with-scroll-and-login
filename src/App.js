
import './main.scss';
import { RegisterForm } from './components/RegisterForm';
import { Friends } from './components/Friends';
import { useSelector } from 'react-redux';
const EmptyBox = () => {
  return (<div className="empty">
    Зарегистрируйтесь чтобы увидеть контент
  </div>);
}
function App() {
  const { isLoggedIn } = useSelector(state => state.logins);
  return (
    <main className="main">
      <div className="main__register">
        <RegisterForm />
      </div>
      <div className="main__user-data">
        {isLoggedIn && <Friends />}
        {!isLoggedIn && <EmptyBox />}
      </div>
    </main>
  );
}

export default App;
