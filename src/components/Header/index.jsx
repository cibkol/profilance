import React from "react";
import "./styles.scss";
import Logo from "../../assets/image/logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
        <button className="links__link">Вход/выход</button>
      </div>
    </div>
  );
}
