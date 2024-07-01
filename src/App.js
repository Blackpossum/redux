import './App.css';
import Profile from './Component/Profile';
import LoginButton from './Component/Login';
import ThemeComponent from './Component/Theme';

function App() {
  return (
    <div className="App">
      <ThemeComponent>
        <Profile/>
        <LoginButton/>
      </ThemeComponent>
    </div>
  );
}

export default App;
