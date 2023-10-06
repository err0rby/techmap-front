import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import eye from "../../assets/icons/eye.png";
import { authSignUp } from "../../features/applicationSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ login, password })); 
    navigate("/");
  };

  return (
    <div className={styles.signUp}>
      <h1>Sign Up</h1>
      <div className={styles.inputs}>
        <form onSubmit={handleSignUp} className={styles.Form}>
          <span>Имя</span>
          <input type="text" value={name} onChange={handleSetName} className={styles.Input} />
          <span>Email</span>
          <input type="text" value={email} onChange={handleSetEmail} className={styles.Input} />
          <span>Номер телефона</span>
          <input type="text" value={phone} onChange={handleSetPhone} className={styles.Input} />
          <span>Логин</span>
          <input type="text" value={login} onChange={handleSetLogin} className={styles.Input} />
          <div className={styles.password}>
            <span>Пароль</span>
            <img src={eye} alt="eye" className={styles.eye} />
          </div>
          <input type="password" value={password} onChange={handleSetPass} className={styles.Input} />
          <span className={styles.support}>Забыли пароль?</span>
          <button type="submit">Зарегистрироваться</button>
          <Link to={`/authorization/signIn`}>
            <span className={styles.support}>Есть аккаунт? Войти</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
