import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../assets/image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import LoginPopup from "../LoginPopup";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);
  const { user } = useSelector((state) => state.login);

  const loginPopupHandler = () => {
    setIsOpenLoginPopup(!isOpenLoginPopup);
  };

  return (
    <div className="header">
      <Link className="logo" to="">
        <img src={Logo} alt="logo" />
      </Link>

      <div className="links">
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `links__link ${isActive ? "links__link_active" : ""}`
          }
        >
          Новости
        </NavLink>
        <button onClick={loginPopupHandler} className="links__link">
          {user.role ? "Выход" : "Вход"}
        </button>
      </div>

      {isOpenLoginPopup && <LoginPopup popupHandler={loginPopupHandler} />}
    </div>
  );
}
