import './App.css';
import Header from "./components/Header/Header";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
     <SignIn />
     <SignUp />
    <Header/>
    </div>
    );
}

export default App;
