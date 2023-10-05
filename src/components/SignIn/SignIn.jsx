import React from "react";
import { Link, useNavigate } from "react-router-dom"
import styles from './signin.module.css'
import { useDispatch } from "react-redux";
import { useState } from "react";
import eye from '../../assets/icons/eye.png'

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ login, setLogin ] = useState('');
    const [ password, setPassword] = useState('')

    const handleSetLogin = (e) => {
        setLogin(e.target.value)
    }
    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefult()
        dispatch()
        navigate('/')
    }

  return (
    <div className={styles.signIn}>
      <h1>Sign In</h1>
      <div className={styles.inputs}>
        <form data-testid="form" onSubmit={handleSignIn}>
          <span>Имя</span>
          <input
            data-testid="login"
            type="text"
            value={login}
            onChange={handleSetLogin}
          />
          <div className={styles.password}>
            <span>Пароль</span>
            <img src={eye} alt="eyeSvg" />
          </div>
          <input
            data-testid="password"
            type="password"
            value={password}
            onChange={handleSetPass}
          />
          <span className={styles.support}>Забыли пароль?</span>

          <button data-testid="submit" type="submit">
            Войти
          </button>

          <Link to={`/authorization/signUp`}>
            <span className={styles.support_2}>
              Нет аккаунта? Зарегистрироваться
            </span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
