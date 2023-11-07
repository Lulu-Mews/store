import React from "react";
import "./Header.css";
import searchIcon from "../../assets/search-svgrepo-com.svg";
import basket from "../../assets/shopping-basket-ecommerce-svgrepo-com.svg";
import logo from "../../assets/flouncy_fox.svg";
import login from "../../assets/padlock-lock-svgrepo-com.svg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="gotohome" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img className="header__searchIcon" src={searchIcon} alt="search" />
        <img className="header__basket" src={basket} alt="basket" />
        <img className="header__login" src={login} alt="login" />
      </div>
      {/* <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
          0
          </span> */}
    </div>
  );
}

export default Header;
