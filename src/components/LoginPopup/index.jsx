import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./slice/index.reducer";

const emptyForm = { login: "", password: "" };

export default function LoginPopup(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickLogin = () => {
    dispatch(login(form));
    setForm(emptyForm);
    props.popupHandler();
  };

  const onClickLogout = () => {
    dispatch(logout(form));
    setForm(emptyForm);
    props.popupHandler();
  };

  const onClickCancel = () => {
    setForm(emptyForm);
    props.popupHandler();
  };

  return (
    <>
      {!user.role ? (
        <div className="login-popup">
          <span>Вход</span>
          <div className="input-block">
            <span className="input-block__label">Логин</span>
            <input
              value={form.login}
              name="login"
              onChange={handleChange}
              className="input-block__input"
              type="text"
            />
          </div>
          <div className="input-block">
            <span className="input-block__label">Пароль</span>
            <input
              value={form.password}
              name="password"
              onChange={handleChange}
              className="input-block__input"
              type="password"
            />
          </div>
          <button onClick={onClickLogin} className="login-popup-btn">
            Войти
          </button>
          <button onClick={onClickCancel} className="login-popup-btn">
            Отмена
          </button>
        </div>
      ) : (
        <div className="login-popup login-popup_logout">
          <span>Привет, {user.login}</span>
          <button onClick={onClickLogout} className="login-popup-btn">
            Выйти
          </button>
        </div>
      )}
    </>
  );
}
