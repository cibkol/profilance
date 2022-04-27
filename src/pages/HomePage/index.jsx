import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { user } = useSelector((state) => state.login);

  return (
    <div className="home-page">
      <span className="home-page__text">Привет, {user.login}</span>
    </div>
  );
}
