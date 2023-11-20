import React from "react";
import basket from "../../../assets/shopping-basket-ecommerce-svgrepo-com.svg";
import logo from "../../../assets/flouncy_fox.svg";
import login from "../../../assets/padlock-lock-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./styles";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Search from "../Search/Search";

function Header() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/order/`);
  };
  const clickHome = () => {
    navigate(`/`);
  };
  const clickLogin = () => {
    navigate(`/login`);
  };
  return (
    <StyledHeader>
      <Flex isWrapping align="end" justify="space-between">
        <Image
          width="280px"
          onClick={clickHome}
          src={logo}
          alt="gotohome"
          spacing={{ left: "50px", bottom: "5px", top: "5px" }}
        />

        <Flex spacing={{ left: "50px", bottom: "24px", right: "16px" }}>
          <Search />
          <Button onClick={clickHandler}>
            <Image src={basket} alt="basket" width="16px" />
          </Button>
          <Button onClick={clickLogin}>
            <Image src={login} alt="login" width="16px" />
          </Button>
        </Flex>
      </Flex>
    </StyledHeader>
  );
}

export default Header;
