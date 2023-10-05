import "./App.css";
import Home from "./pages/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OneCourse from "./pages/OneCourse/OneCourse";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/course/:id" element={<OneCourse />} />
      </Routes>
    </>
  );
}

export default App;
