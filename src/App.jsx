import "./App.css";
import Home from "./pages/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OneCourse from "./pages/OneCourse/OneCourse";
import Profile from "./pages/Profile/Profile";
import ProfileHome from "./components/ProfileHome/ProfileHome";
import ProfileForms from "./components/ProfileForms/ProfileForms";
import ProfileTables from "./components/ProfileTables/ProfileTables";
import ProfileGraphic from "./components/ProfileGraphic/ProfileGraphic";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/course/:id" element={<OneCourse />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<ProfileHome />} />
          <Route path="forms" element={<ProfileForms />} />
          <Route path="tables" element={<ProfileTables />} />
          <Route path="graphics" element={<ProfileGraphic />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
