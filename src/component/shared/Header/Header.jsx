import React from "react";
import searchIcon from "../../../assets/search-svgrepo-com.svg";
import basket from "../../../assets/shopping-basket-ecommerce-svgrepo-com.svg";
import logo from "../../../assets/flouncy_fox.svg";
import login from "../../../assets/padlock-lock-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./styles";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";

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
  const clickSearch = () => {
    navigate(`/`);
  };
  return (
    <StyledHeader>
      <Flex wrap align="end" justify="space-between">
        <Image
          width="280px"
          onClick={clickHome}
          src={logo}
          alt="gotohome"
          spacing={{ left: "50px", bottom: "5px", top: "5px" }}
        />

        <Flex spacing={{ left: "50px", bottom: "24px", right: "16px" }}>
          <input className="header__searchInput" type="text" />
          <Button onClick={clickSearch}>
            <Image src={searchIcon} alt="search" width="16px" />
          </Button>
          <Button onClick={clickHandler}>
            <Image src={basket} alt="basket" width="16px" />
          </Button>
          <Button onClick={clickLogin} alt="login">
            <Image src={login} alt="login" width="16px" />
          </Button>
        </Flex>
      </Flex>
    </StyledHeader>
  );
}

export default Header;
