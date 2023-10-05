import './App.css';
import Home from './pages/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
  );
}

export default App;
