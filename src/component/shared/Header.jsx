import React from "react";
import "./Header.css";
import searchIcon from "../../assets/search-svgrepo-com.svg";
import basket from "../../assets/shopping-basket-ecommerce-svgrepo-com.svg";
import logo from "../../assets/flouncy_fox.svg";
import login from "../../assets/padlock-lock-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/checkout/`);
  };
  const clickHome = () => {
    navigate(`/`);
  };
  const clickLogin = () => {
    navigate(`/login`);
  };
  return (
    <div className="header">
      <img
        className="header__logo"
        onClick={clickHome}
        src={logo}
        alt="gotohome"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img className="header__searchIcon" src={searchIcon} alt="search" />
        <button
          img
          className="header__basket"
          src={basket}
          onClick={clickHandler}
        >
          <img src={basket} alt="basket" />
        </button>
        <button
          img
          className="header__login"
          src={login}
          onClick={clickLogin}
          alt="login"
        >
          <img src={login} alt="login" />
        </button>
        /
      </div>
    </div>
  );
}

export default Header;
